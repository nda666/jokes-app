import { Injectable } from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public async findMany(): Promise<users[]> {
    return await this.prisma.users.findMany();
  }
  
}
