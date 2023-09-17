import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ReceptorModule } from './receptorModule/receptor.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const rabbit = await NestFactory.createMicroservice(ReceptorModule, {
    transport: Transport.RMQ,
    urls: ['amqp://rabbit-nest:5672'],
    queue: 'storedata',
    queueOptions: {
      durable: false,
    },
  });
  rabbit.useGlobalPipes(new ValidationPipe());
  await rabbit.listen();

  const api = await NestFactory.create(AppModule);
  api.useGlobalPipes(new ValidationPipe());
  api.enableCors();
  api.setGlobalPrefix('api/v1');
  await api.listen(4001);
}
bootstrap();
