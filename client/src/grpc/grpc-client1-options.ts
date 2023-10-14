import { ClientOptions, Transport } from '@nestjs/microservices';

export const grpcClientOptions1: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'node_1:50051',
    package: 'micr1',
    protoPath: '/proto/micr1.proto',
  },
};
