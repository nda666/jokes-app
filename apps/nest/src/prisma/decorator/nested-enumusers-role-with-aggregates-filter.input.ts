import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_role } from './users-role.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumusers_roleFilter } from './nested-enumusers-role-filter.input';

@InputType()
export class NestedEnumusers_roleWithAggregatesFilter {

    @Field(() => users_role, {nullable:true})
    equals?: keyof typeof users_role;

    @Field(() => [users_role], {nullable:true})
    in?: Array<keyof typeof users_role>;

    @Field(() => [users_role], {nullable:true})
    notIn?: Array<keyof typeof users_role>;

    @Field(() => NestedEnumusers_roleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumusers_roleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumusers_roleFilter, {nullable:true})
    _min?: NestedEnumusers_roleFilter;

    @Field(() => NestedEnumusers_roleFilter, {nullable:true})
    _max?: NestedEnumusers_roleFilter;
}
