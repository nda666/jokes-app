import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { join } from 'path';
console.log(join(process.cwd(), '/apps/nest/src/schema.gql'));
@Module({
  imports: [
    UserModule,
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        disableHealthCheck: true,
        autoSchemaFile: join(process.cwd(), 'apps/nest/src/schema.gql'),
        debug: true,
        sortSchema: true,
        playground: false,

        plugins: [ApolloServerPluginLandingPageLocalDefault()],
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
