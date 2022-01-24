import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoreJokeService } from '..';
import { CreateJokeDto } from './types/create-joke.dto';
import { UpdateJokeDto } from './types/update-joke.dto';

@Controller('joke')
export class CoreJokeController {
  constructor(private readonly jokeService: CoreJokeService) {}

  @Post()
  create(@Body() createJokeDto: CreateJokeDto) {
    return this.jokeService.create(createJokeDto);
  }

  @Get()
  findAll() {
    return this.jokeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jokeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateJokeDto: UpdateJokeDto) {
    return this.jokeService.update(+id, UpdateJokeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jokeService.remove(+id);
  }
}
