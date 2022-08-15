import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V1Module } from './v1/v1.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';
require('dotenv').config();

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forRoot(process.env.MONGO_ATLAS),
    V1Module,
  ],
  // imports: [DatabaseModule, V1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
