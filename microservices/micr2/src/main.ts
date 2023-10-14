import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
// import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      // protoPath: join(__dirname, './proto/micr1.proto'),
      protoPath: '/proto/micr2.proto',
      package: 'micr2',
    },
  });

  await app.listen();
  console.log('Microservice is listening');
}
bootstrap();
