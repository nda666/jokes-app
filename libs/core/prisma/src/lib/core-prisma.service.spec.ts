import { ConfigService } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { CorePrismaService } from './core-prisma.service';

describe('CorePrismaService', () => {
  let service: CorePrismaService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CorePrismaService, ConfigService],
    }).compile();

    service = module.get(CorePrismaService);
    configService = module.get(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  it('should define configService', () => {
    expect(configService).toBeTruthy();
  });
});
