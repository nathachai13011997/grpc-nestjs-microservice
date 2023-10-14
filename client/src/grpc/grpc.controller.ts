import { Controller, Get, OnModuleInit, Body } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { Client1Dto } from './dto/client1.dto';
import { Client2Dto } from './dto/client2.dto';
import { grpcClientOptions1 } from './client1';
import { grpcClientOptions2 } from './client2';
import { Micr1Service, Micr1 } from './proto/micr1';
import { Micr2Service, Micr2 } from './proto/micr2';

@Controller('grpc')
export class GrpcController implements OnModuleInit {
  @Client(grpcClientOptions1)
  private readonly client1: ClientGrpc;

  @Client(grpcClientOptions2)
  private readonly client2: ClientGrpc;

  private micr1Service: Micr1Service;
  private micr2Service: Micr2Service;

  onModuleInit() {
    this.micr1Service = this.client1.getService<Micr1Service>('Micr1Service');
    this.micr2Service = this.client2.getService<Micr2Service>('Micr2Service');
  }

  @Get('client1')
  find1(@Body() body: Client1Dto): Promise<Micr1> {
    return this.micr1Service.FindOne({ id: Number(body.id) });
  }

  @Get('client2')
  find2(@Body() body: Client2Dto): Promise<Micr2> {
    return this.micr2Service.FindOne({ id: Number(body.id) });
  }
}
