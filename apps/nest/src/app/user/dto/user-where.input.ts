import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '../../../prisma/decorator/date-time-filter.input';
import { DateTimeNullableFilter } from '../../../prisma/decorator/date-time-nullable-filter.input';
import { Enumusers_roleFilter } from '../../../prisma/decorator/enumusers-role-filter.input';
import { IntFilter } from '../../../prisma/decorator/int-filter.input';
import { StringFilter } from '../../../prisma/decorator/string-filter.input';
import { StringNullableFilter } from '../../../prisma/decorator/string-nullable-filter.input';

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  name?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  birthday?: DateTimeFilter;

  @Field(() => Enumusers_roleFilter, { nullable: true })
  role?: Enumusers_roleFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  updatedAt?: DateTimeNullableFilter;

  // @Field(() => JokeListRelationFilter, {nullable:true})
  // Jokes?: JokeListRelationFilter;

  // @Field(() => LikeListRelationFilter, {nullable:true})
  // Like?: LikeListRelationFilter;

  // @Field(() => RatingListRelationFilter, {nullable:true})
  // Rating?: RatingListRelationFilter;
}
