import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class JokeModel {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  question!: string;

  @Field(() => String, { nullable: false })
  answer!: string;

  @Field(() => Int, { nullable: true })
  user_id!: number | null;

  //   @Field(() => User, { nullable: true })
  //   user?: User | null;

  @Field(() => Int, { nullable: true })
  category_id!: number | null;

  //   @Field(() => Category, { nullable: true })
  //   category?: Category | null;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: true })
  updatedAt!: Date | null;

  // @Field(() => [Tag], {nullable:true})
  // tags?: Array<Tag>;

  // @Field(() => [Like], {nullable:true})
  // likes?: Array<Like>;

  // @Field(() => [Rating], {nullable:true})
  // ratings?: Array<Rating>;

  // @Field(() => JokeCount, {nullable:true})
  // _count?: JokeCount | null;
}
