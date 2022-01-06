import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_role } from './users-role.enum';

@InputType()
export class NestedEnumusers_roleFilter {
  @Field(() => users_role, { nullable: true })
  equals?: keyof typeof users_role;

  @Field(() => [users_role], { nullable: true })
  in?: Array<keyof typeof users_role>;

  @Field(() => [users_role], { nullable: true })
  notIn?: Array<keyof typeof users_role>;

  @Field(() => NestedEnumusers_roleFilter, { nullable: true })
  not?: NestedEnumusers_roleFilter;
}
