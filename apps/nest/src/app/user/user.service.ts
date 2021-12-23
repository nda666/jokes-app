import { ConsoleLogger, Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateOneUserInput } from './dto/create-one-user.input';
import { CreateUserDto } from './dto/create-user.dto';
import { UserOrderByWithRelationInput } from './dto/user-order-by-with-relation.input';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public async findAll(
    select: any,
    find?: any,
    order?: UserOrderByWithRelationInput
  ): Promise<User[] | any[]> {
    return await this.prisma.user.findMany({
      ...select,
      where: {
        ...find,
      },
      orderBy: order,
    });
  }

  public async createOne(
    data: CreateOneUserInput | CreateUserDto
  ): Promise<User> {
    return await this.prisma.user.create(data);
  }
}
