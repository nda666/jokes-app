import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaService } from '../../prisma/prisma.service';
import { JokeController } from './joke.controller';
import { JokeService } from './joke.service';

describe('JokeController', () => {
  let controller: JokeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [JokeController],
      providers: [JokeService],
    }).compile();

    controller = module.get<JokeController>(JokeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
