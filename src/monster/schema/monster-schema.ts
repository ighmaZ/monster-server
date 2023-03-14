import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MonsterDocument = Monsters & Document;
@Schema({ collection: 'Monsters' })
export class Monsters {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  kills: number;
}

export const MonsterSchema = SchemaFactory.createForClass(Monsters);
