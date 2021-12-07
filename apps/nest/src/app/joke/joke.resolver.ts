import { Joke } from '.prisma/client';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { CreateOneJokeInput } from './dto/create-one-joke.input';
import { JokeModel } from './dto/joke.model';
import { UpdateJokeInput } from './dto/update-joke.input';
import { JokeService } from './joke.service';

@Resolver()
export class JokeResolver {
  constructor(private readonly jokeService: JokeService) {}

  @Mutation(() => JokeModel)
  createJoke(@Args('data') createOneJokeInput: CreateOneJokeInput) {
    return this.jokeService.create(createOneJokeInput);
  }

  @Query(() => [JokeModel])
  async jokes(@Info() info): Promise<Joke[]> {
    const select = new PrismaSelect(info).value;
    return await this.jokeService.findAll(select);
  }

  @Query(() => String)
  joke(@Args('id') id: string) {
    return this.jokeService.findOne(+id);
  }

  @Mutation(() => JokeModel)
  updateJoke(
    @Args('id') id: string,
    @Args('data') updateJokeInput: UpdateJokeInput
  ) {
    return this.jokeService.update(+id, updateJokeInput);
  }

  @Mutation(() => JokeModel)
  deleteJoke(@Args('id') id: string) {
    return this.jokeService.remove(+id);
  }
}
