import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IsUnique } from '../../../validation/unique.validation';
import { IsEmail, IsNotEmpty, Validate } from 'class-validator';
// import { JokeCreateNestedManyWithoutUserInput } from '../joke/joke-create-nested-many-without-user.input';
// import { LikeCreateNestedManyWithoutUserInput } from '../like/like-create-nested-many-without-user.input';
// import { RatingCreateNestedManyWithoutUserInput } from '../rating/rating-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {
  @IsEmail()
  @IsNotEmpty()
  @Validate(IsUnique, ['User', 'user', 'email'], {
    context: 'Email',
  })
  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field()
  password!: string;

  @Field(() => Date, { nullable: false })
  birthday!: Date | string;

  // @Field(() => users_role, {nullable:true})
  // role?: keyof typeof users_role;

  // @Field(() => JokeCreateNestedManyWithoutUserInput, {nullable:true})
  // Jokes?: JokeCreateNestedManyWithoutUserInput;

  // @Field(() => LikeCreateNestedManyWithoutUserInput, {nullable:true})
  // Like?: LikeCreateNestedManyWithoutUserInput;

  // @Field(() => RatingCreateNestedManyWithoutUserInput, {nullable:true})
  // Rating?: RatingCreateNestedManyWithoutUserInput;
}
