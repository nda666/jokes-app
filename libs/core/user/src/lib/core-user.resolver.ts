import { User } from '.prisma/client';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { CreateOneUserInput } from './types/create-one-user.input';
import { User as UserModel } from './types/user.model';
import { UserOrderByWithRelationInput } from './types/user-order-by-with-relation.input';
import { CoreUserService } from './core-user.service';
import { UserWhereInput } from './types/user-where.input';

@Resolver()
export class CoreUserResolver {
  constructor(private readonly userService: CoreUserService) {}
  @Query(() => [UserModel])
  async users(
    @Args('find', { nullable: true })
    find: UserWhereInput,
    @Args('order', { nullable: true })
    order: UserOrderByWithRelationInput,
    @Info() info
  ): Promise<User[]> {
    const select = new PrismaSelect(info).value;
    return await this.userService.findAll(select);
  }

  @Mutation(() => UserModel, {
    description: 'create one user, returns the created user',
  })
  async createOneUser(
    @Args('input', {
      description: 'data for the new user',
    })
    data: CreateOneUserInput
  ): Promise<User> {
    return await this.userService.createOne(data);
  }
}
