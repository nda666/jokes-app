import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CorePrismaService } from '@tiar-joke/core-prisma';
import { CreateOneUserInput } from '@tiar-joke/core-user/types/create-one-user.input';
import { CreateUserDto } from '@tiar-joke/core-user/types/create-user.dto';
import { UserOrderByWithRelationInput } from '@tiar-joke/core-user/types/user-order-by-with-relation.input';

@Injectable()
export class CoreUserService {
  constructor(private readonly prisma: CorePrismaService) {}

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

  public async findOne(find?: any) {
    return await this.prisma.user.findUnique({
      where: {
        ...find,
      },
    });
  }

  public async createOne(
    data: CreateOneUserInput | CreateUserDto
  ): Promise<User> {
    return await this.prisma.user.create(data);
  }
}
