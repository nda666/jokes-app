import { Args, Field, ObjectType, Query, Resolver } from '@nestjs/graphql';
@ObjectType()
export class Hello {
  @Field()
  message: string;
}
