import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions1 } from './grpc-client1-options';
import { grpcClientOptions2 } from './grpc-client2-options';
import { GrpcController } from './grpc.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CLIENT1_PACKAGE',
        ...grpcClientOptions1,
      },
      {
        name: 'CLIENT2_PACKAGE',
        ...grpcClientOptions2,
      },
    ]),
  ],
  controllers: [GrpcController],
})
export class GrpcModule {}
