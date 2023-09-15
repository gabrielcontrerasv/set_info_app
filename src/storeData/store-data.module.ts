import { Module } from '@nestjs/common';
import { StoreController } from './store-data.controller';
import { Store, StoreSchema } from './schema/store.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreService } from './store-data.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Store', schema: StoreSchema }]),
  ],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreDataModule {}
