import { Module } from '@nestjs/common';
import { ReceptorController } from './receptor.controller';
import { ReceptorSchema } from './schema/receptor.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ReceptorService } from './receptor.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RECEPTOR_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://rabbit-nest:5672'],
          queue: 'storedata',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    MongooseModule.forRoot('mongodb://localhost:27018/turbotraffic'),
    MongooseModule.forFeature([{ name: 'Receptor', schema: ReceptorSchema }]),
  ],
  controllers: [ReceptorController],
  providers: [ReceptorService],
})
export class ReceptorModule {}
