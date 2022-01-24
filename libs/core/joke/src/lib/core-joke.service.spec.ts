import { Test, TestingModule } from '@nestjs/testing';
import { CorePrismaModule } from '@tiar-joke/core-prisma';
import { CoreJokeService } from './core-joke.service';

describe('JokeService', () => {
  let service: CoreJokeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CorePrismaModule],
      providers: [CoreJokeService],
    }).compile();

    service = module.get<CoreJokeService>(CoreJokeService);
  });

  it('should be defined CoreJokeService', () => {
    expect(service).toBeDefined();
  });
});
