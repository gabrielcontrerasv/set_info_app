import { Module } from '@nestjs/common';
import { StoreDataModule } from './storeData/store-data.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI_ATLAS),
    StoreDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
