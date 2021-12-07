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
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import { AppConfigInterface } from './interfaces/config/app.interface';
import { ValidationPipe } from './pipes/validation.pipe';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  const configService = app.get(ConfigService);
  const globalPrefix = 'api';
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.useLogger(app.get(Logger));
  app.setGlobalPrefix(globalPrefix);
  const port = configService.get<AppConfigInterface>('app').port;
  await app.listen(port, () => {
    app
      .get(Logger)
      .debug(`Listening at http://localhost:${port}/${globalPrefix}`);
  });
}

bootstrap();
