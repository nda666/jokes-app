import { ConfigService } from '@nestjs/config';
import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@tiar-joke/core-user/types/user.model';

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
  @Field(() => User, { nullable: false })
  user: User;
}
