import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateOneJokeInput {
  @Field(() => String, { nullable: false })
  question!: string;

  @Field(() => String, { nullable: false })
  answer!: string;
}
