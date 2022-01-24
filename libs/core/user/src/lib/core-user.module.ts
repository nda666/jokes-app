import { Module } from '@nestjs/common';
import { CorePrismaModule } from '@tiar-joke/core-prisma';
import { CoreUserResolver } from './core-user.resolver';
import { CoreUserService } from './core-user.service';
@Module({
  imports: [CorePrismaModule],
  providers: [CoreUserService, CoreUserResolver],
  exports: [CoreUserResolver, CoreUserService],
})
export class CoreUserModule {}
