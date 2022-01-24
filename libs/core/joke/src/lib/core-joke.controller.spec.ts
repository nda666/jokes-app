import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { CorePrismaModule } from '@tiar-joke/core-prisma';
import { CoreJokeService } from './core-joke.service';
import { CoreJokeController } from './core-joke.controller';

describe('JokeController', () => {
  let controller: CoreJokeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CorePrismaModule],
      controllers: [CoreJokeController],
      providers: [CoreJokeService],
    }).compile();

    controller = module.get<CoreJokeController>(CoreJokeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
