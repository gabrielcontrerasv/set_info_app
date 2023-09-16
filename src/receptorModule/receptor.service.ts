import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ReceptorDocument } from './schema/receptor.schema';
import { receptorDataDTO } from './Dto/receptor.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReceptorService {
  constructor(
    @InjectModel('Receptor')
    private readonly receptorDataModel: Model<ReceptorDocument>,
  ) {}

  @MessagePattern({ cmd: 'storedata' })
  async handleMessage(data: receptorDataDTO) {
    try {
      console.log('Evento ejecutado');
      return await this.receptorDataModel.create(data);
    } catch (error) {
      throw new Error(`Error al almacenar los datos: ${error.message}`);
    }
  }

  async getData() {
    return await this.receptorDataModel.find().exec();
  }
}
