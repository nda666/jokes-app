import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../../prisma/decorator/sort-order.enum';
// import { JokeOrderByRelationAggregateInput } from '../joke/joke-order-by-relation-aggregate.input';
// import { LikeOrderByRelationAggregateInput } from '../like/like-order-by-relation-aggregate.input';
// import { RatingOrderByRelationAggregateInput } from '../rating/rating-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  birthday?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  //   @Field(() => JokeOrderByRelationAggregateInput, { nullable: true })
  //   Jokes?: JokeOrderByRelationAggregateInput;

  //   @Field(() => LikeOrderByRelationAggregateInput, { nullable: true })
  //   Like?: LikeOrderByRelationAggregateInput;

  //   @Field(() => RatingOrderByRelationAggregateInput, { nullable: true })
  //   Rating?: RatingOrderByRelationAggregateInput;
}
