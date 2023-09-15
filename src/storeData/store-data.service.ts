import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StoreDocument } from './schema/store.schema';
import { storeDataDTO } from './Dto/store-data.dto';

export class StoreService {
  constructor(@InjectModel('Store') private storeData: Model<StoreDocument>) {}
  async createData(data: storeDataDTO) {
    try {
      return await this.storeData.create(data);
    } catch (e) {
      return e;
    }
  }

  async getData() {
    return await this.storeData.find().exec();
  }
}
