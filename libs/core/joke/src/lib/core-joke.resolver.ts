import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { CoreJokeService } from './core-joke.service';
import { CreateOneJokeInput } from './types/create-one-joke.input';
import { Joke } from './types/joke.model';
import { UpdateJokeInput } from './types/update-joke.input';

@Resolver()
export class CoreJokeResolver {
  constructor(private readonly jokeService: CoreJokeService) {}

  @Mutation(() => Joke)
  createJoke(@Args('data') createOneJokeInput: CreateOneJokeInput) {
    return this.jokeService.create(createOneJokeInput);
  }

  @Query(() => [Joke])
  async jokes(@Info() info): Promise<Joke[]> {
    const select = new PrismaSelect(info).value;
    return await this.jokeService.findAll(select);
  }

  @Query(() => String)
  joke(@Args('id') id: string) {
    return this.jokeService.findOne(+id);
  }

  @Mutation(() => Joke)
  updateJoke(
    @Args('id') id: string,
    @Args('data') updateJokeInput: UpdateJokeInput
  ) {
    return this.jokeService.update(+id, updateJokeInput);
  }

  @Mutation(() => Joke)
  deleteJoke(@Args('id') id: string) {
    return this.jokeService.remove(+id);
  }
}
