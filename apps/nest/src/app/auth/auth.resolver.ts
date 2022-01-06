import { User } from '.prisma/client';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User as UserModel } from '@app-nest/app/user/dto/user.model';
import { UserService } from '../user/user.service';
import { CurrentUser } from './current-user.decorator';
import { JwtAuthGuard } from './jwt-auth.guard';
import * as argon2 from 'argon2';
import { Auth as AuthType } from './dto/auth.model';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { ValidationPipe } from '../../pipes/validation.pipe';
import { I18n, I18nContext } from 'nestjs-i18n';
@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}
  @Query(() => UserModel)
  @UseGuards(JwtAuthGuard)
  async me(@CurrentUser() user: any): Promise<User> {
    return await this.userService.findOne({ id: user.id });
  }

  @Mutation(() => AuthType)
  async login(
    @Args(
      'input',
      {
        description: 'data for the new user',
      },
      ValidationPipe
    )
    data: LoginInput
  ) {
    const auth = await this.authService.login(data.email, data.password);
    return auth;
  }
}
