import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonsterModule } from './monster/monster.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ighmazt:sOwatiKUESNVetR6@cluster0.cmqdmzm.mongodb.net/Monsters?retryWrites=true&w=majority',
    ),
    MonsterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
