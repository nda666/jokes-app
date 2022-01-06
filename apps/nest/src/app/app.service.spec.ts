import { ConfigService } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService, ConfigService, PrismaService],
      imports: [ConfigService],
    }).compile();

    service = await app.get<AppService>(AppService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
