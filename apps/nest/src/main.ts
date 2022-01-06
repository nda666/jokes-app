/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { AppConfigInterface } from './interfaces/config/app.interface';
import { useContainer } from 'class-validator';
import {
  WinstonModule,
  WINSTON_MODULE_NEST_PROVIDER,
  WINSTON_MODULE_PROVIDER,
} from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  const configService = app.get(ConfigService);
  const globalPrefix = 'api';
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.setGlobalPrefix(globalPrefix);
  const port = configService.get<AppConfigInterface>('app').port;
  await app.listen(port, '0.0.0.0', () => {
    app
      .get(WINSTON_MODULE_PROVIDER)
      .info(`Listening at http://localhost:${port}/${globalPrefix}`);
  });
}

bootstrap();
