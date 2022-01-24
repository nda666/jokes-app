import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AppService } from './app.service';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppResolver } from './app.resolver';
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
import configs from '@app-nest/configs';
import {
  AppConfigInterface,
  GraphqlConfigInterface,
} from '@tiar-joke/core-interface';
import { CoreUserModule } from '@tiar-joke/core-user';
import { CoreJokeModule } from '@tiar-joke/core-joke';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configs],
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      parser: I18nJsonParser,
      parserOptions: {
        path: join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [AcceptLanguageResolver],
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
          autoSchemaFile: config.get<AppConfigInterface>('app').production
            ? 'schema.gql'
            : process.cwd() + '/apps/nest/src/schema.gql',

          debug: graphqlConfig.debug,
          sortSchema: graphqlConfig.sortSchema,
          playground: graphqlConfig.playground,
          plugins:
            graphqlConfig.playground === false
              ? [await ApolloServerPluginLandingPageLocalDefault()]
              : [],
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
    CoreUserModule,
    CoreJokeModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
