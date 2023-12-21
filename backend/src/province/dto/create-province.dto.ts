import { IsNotEmpty } from 'class-validator';

export class ProvinceDto {
  @IsNotEmpty()
  code: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  airportName: string;
}
