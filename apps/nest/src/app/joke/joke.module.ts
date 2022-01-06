import { Module } from '@nestjs/common';
import { JokeService } from './joke.service';
import { JokeResolver } from './joke.resolver';
import { PrismaModule } from '../../prisma/prisma.module';
import { JokeController } from './joke.controller';

@Module({
  imports: [PrismaModule],
  controllers: [JokeController],
  providers: [JokeService, JokeResolver],
  exports: [JokeResolver],
})
export class JokeModule {}
