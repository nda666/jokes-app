import { Test, TestingModule } from '@nestjs/testing';
import { JokeResolver } from './joke.resolver';

describe('JokeResolver', () => {
  let resolver: JokeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JokeResolver],
    }).compile();

    resolver = module.get<JokeResolver>(JokeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
