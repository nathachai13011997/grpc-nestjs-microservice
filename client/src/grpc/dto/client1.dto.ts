import { IsNotEmpty } from 'class-validator';

export class Client1Dto {
  @IsNotEmpty()
  readonly id: number;
}
