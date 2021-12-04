import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from '../configs';
import { LoggerModule } from 'nestjs-pino';
import { AppConfigInterface } from '../interfaces/config/app.interface';
import { GraphqlConfigInterface } from '../interfaces/config/graphql.interface';
import { AppResolver } from './app.resolver';
import { UserResolver } from './user/user.resolver';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          pinoHttp: { level: 'debug' },
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
        };
      },
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver, UserResolver],
})
export class AppModule {}
