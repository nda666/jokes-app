import { InputType, PartialType } from '@nestjs/graphql';
import { CreateOneUserInput } from './create-one-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateOneUserInput) {}
