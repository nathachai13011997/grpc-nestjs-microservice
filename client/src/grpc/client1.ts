import { ClientOptions, Transport } from '@nestjs/microservices';
// import { join } from 'path';

export const grpcClientOptions1: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'node_1:50051', // node_1:50051 , 0.0.0.0:50051
    package: 'micr1',
    // protoPath: join(__dirname, '../proto/micr1.proto'),
    protoPath: '/proto/micr1.proto',
  },
};
