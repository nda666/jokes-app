import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { CorePrismaModule } from '../../../prisma/src/lib/core-prisma.module';
import { CoreJokeResolver } from './core-joke.resolver';
import { CoreJokeService } from './core-joke.service';

describe('JokeResolver', () => {
  let resolver: CoreJokeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CorePrismaModule],
      providers: [CoreJokeService, CoreJokeResolver],
    }).compile();

    resolver = module.get<CoreJokeResolver>(CoreJokeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
