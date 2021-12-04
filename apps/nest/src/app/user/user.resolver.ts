import { User } from '.prisma/client';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { User as UserModel } from '../../@models/user/user.model';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => [UserModel])
  async users(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
