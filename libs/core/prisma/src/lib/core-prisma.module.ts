import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CorePrismaService } from './core-prisma.service';

@Module({
  imports: [],
  providers: [CorePrismaService, ConfigService],
  exports: [CorePrismaService],
})
export class CorePrismaModule {}
