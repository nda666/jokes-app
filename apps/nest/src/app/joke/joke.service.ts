import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateJokeDto } from './dto/create-joke.dto';
import { CreateOneJokeInput } from './dto/create-one-joke.input';
import { UpdateJokeDto } from './dto/update-joke.dto';
import { UpdateJokeInput } from './dto/update-joke.input';

@Injectable()
export class JokeService {
  constructor(private prisma: PrismaService) {}
  create(createOneJokeInput: CreateOneJokeInput | CreateJokeDto) {
    return 'This action adds a new joke';
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
