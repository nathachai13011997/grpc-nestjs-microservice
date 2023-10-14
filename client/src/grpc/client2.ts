import { ClientOptions, Transport } from '@nestjs/microservices';
// import { join } from 'path';

export const grpcClientOptions2: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'node_2:50051', // node_2:50051, 0.0.0.0:50052
    package: 'micr2',
    // protoPath: join(__dirname, '../proto/micr2.proto'),
    protoPath: '/proto/micr2.proto',
  },
};
