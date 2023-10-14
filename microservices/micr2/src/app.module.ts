import { Module } from '@nestjs/common';
import { Micr2Service } from './micr2.service';

@Module({
  imports: [],
  controllers: [Micr2Service],
  providers: [Micr2Service],
})
export class AppModule {}
