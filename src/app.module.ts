import { Module } from '@nestjs/common';
import { StoreDataModule } from './storeDataModule/store-data.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27018/turbotraffic'),
    StoreDataModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
