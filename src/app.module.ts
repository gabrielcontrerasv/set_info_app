import { Module } from '@nestjs/common';
import { StoreDataModule } from './storeData/store-data.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27018/turbotraffic',
    ),
    StoreDataModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
