import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_role } from './users-role.enum';

@InputType()
export class Enumusers_roleFieldUpdateOperationsInput {
  @Field(() => users_role, { nullable: true })
  set?: keyof typeof users_role;
}
