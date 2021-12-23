import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_role } from './users-role.enum';
import { NestedEnumusers_roleFilter } from './nested-enumusers-role-filter.input';

@InputType()
export class Enumusers_roleFilter {

    @Field(() => users_role, {nullable:true})
    equals?: keyof typeof users_role;

    @Field(() => [users_role], {nullable:true})
    in?: Array<keyof typeof users_role>;

    @Field(() => [users_role], {nullable:true})
    notIn?: Array<keyof typeof users_role>;

    @Field(() => NestedEnumusers_roleFilter, {nullable:true})
    not?: NestedEnumusers_roleFilter;
}
