import { IsNotEmpty } from 'class-validator';

export class CreateAirlineDto {
  @IsNotEmpty()
  name: string;
}
