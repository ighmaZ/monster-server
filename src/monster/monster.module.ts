import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MonsterSchema } from './schema/monster-schema';
import { MonsterService } from './monster.service';
import { MonsterController } from './monster.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Monsters',
        schema: MonsterSchema,
        collection: 'Monsters',
      },
    ]),
  ],
  providers: [MonsterService],
  controllers: [MonsterController],
})
export class MonsterModule {}
