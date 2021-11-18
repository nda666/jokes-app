import { Args, Query, Resolver } from '@nestjs/graphql';
import { Hello } from './hello';

@Resolver(() => Hello)
export class UserResolver {
  @Query(() => Hello)
  hello(@Args('text') text: string): Hello {
    return {
      message: `Hello ${text}`,
    };
  }
}
