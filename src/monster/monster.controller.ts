import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MonsterService } from './monster.service';
import { Monsters } from './schema/monster-schema';

@Controller('monster')
export class MonsterController {
  constructor(private monsterService: MonsterService) {}

  @Get()
  async getAll() {
    return await this.monsterService.getAll();
  }

  @Post()
  async create(@Body() monsters: Monsters) {
    return await this.monsterService.create(monsters);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.monsterService.delete(id);
  }
}
