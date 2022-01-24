import { Injectable } from '@nestjs/common';
import { CorePrismaService } from '@tiar-joke/core-prisma';
import { CreateJokeDto } from './types/create-joke.dto';
import { CreateOneJokeInput } from './types/create-one-joke.input';
import { UpdateJokeDto } from './types/update-joke.dto';
import { UpdateJokeInput } from './types/update-joke.input';

@Injectable()
export class CoreJokeService {
  constructor(private prisma: CorePrismaService) {}
  create(createOneJokeInput: CreateOneJokeInput | CreateJokeDto) {
    return createOneJokeInput;
  }

  async findAll(select?: any) {
    return this.prisma.joke.findMany(select);
  }

  findOne(id: number) {
    return `This action returns a #${id} joke`;
  }

  update(id: number, updateJokeDto: UpdateJokeInput | UpdateJokeDto) {
    return `This action updates a #${id} joke`;
  }

  remove(id: number) {
    return `This action removes a #${id} joke`;
  }
}
