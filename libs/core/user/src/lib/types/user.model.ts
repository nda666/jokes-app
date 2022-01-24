import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Joke } from '@tiar-joke/core-joke/types/joke.model';
import { users_role } from '@tiar-joke/core-prisma/types/users-role.enum';

@ObjectType({
  isAbstract: true,
  description: 'user model',
})
export class User {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: false })
  birthday!: Date;

  @Field(() => users_role, { nullable: false })
  role!: users_role;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: true })
  updatedAt!: Date | null;

  @Field(() => [Joke], { nullable: true })
  Jokes?: Array<Joke>;
}
