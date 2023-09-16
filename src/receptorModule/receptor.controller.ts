import { Controller, Post, Body } from '@nestjs/common';
import { ReceptorService } from './receptor.service';
import { receptorDataDTO } from './Dto/receptor.dto';

@Controller('receptor') 
export class ReceptorController {
  constructor(private readonly receptorService: ReceptorService) {}

  async createData(data: receptorDataDTO) {
    try {
      const createdData = await this.receptorService.handleMessage(data);
      return { message: 'Datos almacenados correctamente', data: createdData };
    } catch (error) {
      return { error: error.message };
    }
  }
}
