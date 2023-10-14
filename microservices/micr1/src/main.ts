import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      protoPath: '/proto/micr1.proto',
      package: 'micr1',
    },
  });

  await app.listen();
  console.log('Microservice is listening');
}
bootstrap();
