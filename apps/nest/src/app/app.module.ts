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
import { GraphqlConfigInterface } from '../interfaces/config/graphql.interface';
import { AppResolver } from './app.resolver';
import { createWriteStream } from 'fs';
import { JokeModule } from './joke/joke.module';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '../pipes/validation.pipe';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const streams = [
          { stream: createWriteStream(`./logs/info.log`) },
          {
            level: 'info',
            stream: createWriteStream(`./logs/info.log`),
          },
          {
            level: 'debug',
            stream: createWriteStream(`./logs/debug.log`),
          },
          {
            level: 'warn',
            stream: createWriteStream(`./logs/warn.log`),
          },
          {
            level: 'error',
            stream: createWriteStream(`./logs/error.log`),
          },
          {
            level: 'fatal',
            stream: createWriteStream(`./fatal.log`),
          },
        ];
        return {
          pinoHttp: {
            level: 'debug',
            streams,
          },
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
    JokeModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
