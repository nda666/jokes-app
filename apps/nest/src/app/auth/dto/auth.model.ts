import { AuthConfigInterface } from '@app-nest/interfaces/config/auth.interface';
import { ConfigService } from '@nestjs/config';
import { Field, ObjectType } from '@nestjs/graphql';
import { User as UserModel } from '../../user/dto/user.model';

@ObjectType({
  description: 'Auth Types',
})
export class Auth {
  constructor(private config: ConfigService) {}
  @Field(() => String, { nullable: false, description: 'Valid for 24 Hour' })
  token: string;
  @Field(() => String, {
    nullable: false,
    description: 'Valid for 30 days, used to get a new access token.',
  })
  refreshToken: string;
  @Field(() => UserModel, { nullable: false })
  user: UserModel;
}
