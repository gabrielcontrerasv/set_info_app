import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ReceptorDocument } from './schema/receptor.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReceptorService {
  constructor(
    @InjectModel('Receptor')
    private readonly receptorDataModel: Model<ReceptorDocument>,
  ) {}

  @MessagePattern({ cmd: 'store' })
  async handleMessage(data: string) {
    try {
      return await this.receptorDataModel.create(data);
    } catch (error) {
      throw new Error(`Error al almacenar los datos: ${error.message}`);
    }
  }

  async getData() {
    return await this.receptorDataModel.find().exec();
  }
}
