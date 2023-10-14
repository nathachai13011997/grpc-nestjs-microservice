import { Controller, Get, OnModuleInit, Body, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Client1Dto } from './dto/client1.dto';
import { Client2Dto } from './dto/client2.dto';
import { Micr1Service, Micr1 } from './proto/micr1';
import { Micr2Service, Micr2 } from './proto/micr2';

@Controller('grpc')
export class GrpcController implements OnModuleInit {
  constructor(
    @Inject('CLIENT1_PACKAGE') private readonly client1: ClientGrpc,
    @Inject('CLIENT2_PACKAGE') private readonly client2: ClientGrpc,
  ) {}

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
