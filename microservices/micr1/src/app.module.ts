import { Module } from '@nestjs/common';
import { Micr1Service } from './micr1.service';

@Module({
  imports: [],
  controllers: [Micr1Service],
  providers: [Micr1Service],
})
export class AppModule {}
