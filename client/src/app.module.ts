import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GrpcController } from './grpc/grpc.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, GrpcController],
  providers: [AppService],
})
export class AppModule {}
