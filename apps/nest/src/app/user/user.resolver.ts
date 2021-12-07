import { User } from '.prisma/client';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { PrismaSelect } from '@paljs/plugins';
import { CreateOneUserInput } from './dto/create-one-user.input';
import { UserModel } from './dto/user.model';
import { UserOrderByWithRelationInput } from './dto/user-order-by-with-relation.input';
import { UserWhereInput } from './dto/user-where.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
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
