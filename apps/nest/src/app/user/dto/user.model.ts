import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { users_role } from '../../../prisma/decorator/users-role.enum';
import { Joke } from '../../joke/entities/joke.entity';

@ObjectType()
export class UserModel {
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
