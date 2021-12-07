import { InputType, PartialType } from '@nestjs/graphql';
import { CreateOneJokeInput } from './create-one-joke.input';

@InputType()
export class UpdateJokeInput extends PartialType(CreateOneJokeInput) {}
