import { Module } from '@nestjs/common';
import { StoreDataModule } from './storeDataModule/store-data.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL), StoreDataModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
