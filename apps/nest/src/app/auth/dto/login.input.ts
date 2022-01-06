import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Validate } from 'class-validator';

@InputType()
export class LoginInput {
  @IsEmail()
  @IsNotEmpty()
  @Field(() => String, { nullable: false })
  email!: string;

  @Field()
  password!: string;
}
