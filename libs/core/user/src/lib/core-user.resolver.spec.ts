import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { CorePrismaModule, CorePrismaService } from '@tiar-joke/core-prisma';
import { CoreUserResolver } from './core-user.resolver';
import { CoreUserModule } from './core-user.module';

describe('UserResolver', () => {
  let resolver: CoreUserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoreUserResolver],
      imports: [CoreUserModule],
    }).compile();

    resolver = module.get<CoreUserResolver>(CoreUserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
