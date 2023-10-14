import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Micr2ById, Micr2 } from './proto/micr2';

@Controller()
export class Micr2Service {
  @GrpcMethod()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findOne(data: Micr2ById, metadata: any): Micr2 {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
