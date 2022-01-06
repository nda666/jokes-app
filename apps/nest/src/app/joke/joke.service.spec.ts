import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../prisma/prisma.module';
import { JokeService } from './joke.service';

describe('JokeService', () => {
  let service: JokeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [JokeService],
    }).compile();

    service = module.get<JokeService>(JokeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
