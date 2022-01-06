import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from '../configs';
import { GraphqlConfigInterface } from '../interfaces/config/graphql.interface';
import { AppResolver } from './app.resolver';
import { JokeModule } from './joke/joke.module';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '../pipes/validation.pipe';
import { WinstonModule } from 'nest-winston';
import {
  I18nModule,
  I18nJsonParser,
  HeaderResolver,
  AcceptLanguageResolver,
  CookieResolver,
} from 'nestjs-i18n';
import {
  winstonFormat,
  winstonTransportStream,
} from '../utils/winston/winston';
import { AuthModule } from './auth/auth.module';
import { QueryResolver } from '@app-nest/i18n/QueryResolver';
@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      parser: I18nJsonParser,
      parserOptions: {
        path: join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [AcceptLanguageResolver],
    }),
    ConfigModule.forRoot({
      load: [config],
    }),

    WinstonModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: async (config: ConfigService) => {
        return {
          format: winstonFormat,
          transports: winstonTransportStream,
        };
      },
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: async (config: ConfigService) => {
        const graphqlConfig: GraphqlConfigInterface =
          config.get<GraphqlConfigInterface>('graphql');
        return {
          disableHealthCheck: graphqlConfig.disableHealthCheck,
          autoSchemaFile: join(process.cwd(), 'apps/nest/src/schema.gql'),
          debug: graphqlConfig.debug,
          sortSchema: graphqlConfig.sortSchema,
          playground: false,
          plugins: [await ApolloServerPluginLandingPageLocalDefault()],
          buildSchemaOptions: {
            dateScalarMode: 'timestamp',
          },
          context: ({ req, connection }) => {
            if (connection) {
              return connection.context;
            }
            return { req };
          },
        };
      },
    }),
    AuthModule,
    UserModule,
    JokeModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
