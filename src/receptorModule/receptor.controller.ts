import { Controller } from '@nestjs/common';
import { ReceptorService } from './receptor.service';
import { receptorDataDTO } from './Dto/receptor.dto';

@Controller()
export class ReceptorController {
  constructor(private readonly receptorService: ReceptorService) {}

  async createData(data: receptorDataDTO) {
    try {
      console.log('Evento ejecutado');
      //const createdData = await this.receptorService.handleMessage(data.data);
      //return { message: 'Datos almacenados correctamente', data: createdData };
    } catch (error) {
      return { error: error.message };
    }
  }
}
