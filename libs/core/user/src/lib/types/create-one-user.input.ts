import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { UserCreateInput } from './user-create.input';
@InputType()
export class CreateOneUserInput {
  @Field(() => UserCreateInput, { nullable: false })
  @ValidateNested({ each: false })
  @IsNotEmpty()
  @Type(() => UserCreateInput)
  data!: UserCreateInput;
}
