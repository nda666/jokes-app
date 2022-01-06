import { ConfigService } from '@nestjs/config';
import { Query, Resolver } from '@nestjs/graphql';
import { AppConfigInterface } from '../interfaces/config/app.interface';
import { AppInterface } from './app.interface';

@Resolver()
export class AppResolver {
  constructor(private config: ConfigService) {}
  @Query(() => AppInterface)
  app(): AppInterface {
    const app = this.config.get<AppConfigInterface>('app');
    return {
      name: app.name,
      version: app.version,
    };
  }
}
