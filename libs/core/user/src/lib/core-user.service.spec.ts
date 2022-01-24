import { Test } from '@nestjs/testing';
import { CorePrismaModule, CorePrismaService } from '@tiar-joke/core-prisma';
import { CoreUserService } from './core-user.service';

describe('CoreUserService', () => {
  let service: CoreUserService;
  let prismaService: CorePrismaService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CoreUserService],
      imports: [CorePrismaModule],
    }).compile();

    service = module.get(CoreUserService);
    prismaService = module.get(CorePrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  it('should defined prismaService', () => {
    expect(prismaService).toBeTruthy();
  });
});
