import { IsNotEmpty } from 'class-validator';

export class Client2Dto {
  @IsNotEmpty()
  readonly id: number;
}
