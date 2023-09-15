import { storeDataDTO } from './Dto/store-data.dto';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { StoreService } from './store-data.service';

@Controller()
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post('store')
  async createData(@Body() data: storeDataDTO) {
    return this.storeService.createData(data);
  }

  @Get('store')
  async getData() {
    return this.storeService.getData();
  }
}
