import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaService } from '../../prisma/prisma.service';
import { JokeResolver } from './joke.resolver';
import { JokeService } from './joke.service';

describe('JokeResolver', () => {
  let resolver: JokeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [JokeService, JokeResolver],
    }).compile();

    resolver = module.get<JokeResolver>(JokeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
