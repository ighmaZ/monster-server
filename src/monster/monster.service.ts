import { Injectable } from '@nestjs/common';
import { Monsters, MonsterDocument } from './schema/monster-schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MonsterService {
  constructor(
    @InjectModel(Monsters.name)
    private readonly MonsterModel: Model<MonsterDocument>,
  ) {}

  async getAll() {
    return await this.MonsterModel.find().exec();
  }

  async create(monsters: Monsters) {
    const newMonster = new this.MonsterModel(monsters);
    return await newMonster.save();
  }

  async delete(id: string) {
    await this.MonsterModel.findByIdAndRemove(id);
  }
}
