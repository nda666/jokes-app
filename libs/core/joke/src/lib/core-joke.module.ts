import { Module } from '@nestjs/common';
import { CorePrismaModule } from '@tiar-joke/core-prisma';
import { CoreJokeService } from '..';
import { CoreJokeController } from './core-joke.controller';
import { CoreJokeResolver } from './core-joke.resolver';

@Module({
  imports: [CorePrismaModule],
  controllers: [CoreJokeController],
  providers: [CoreJokeService, CoreJokeResolver],
  exports: [CoreJokeResolver],
})
export class CoreJokeModule {}
