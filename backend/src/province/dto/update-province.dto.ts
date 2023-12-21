import { PartialType } from '@nestjs/mapped-types';
import { ProvinceDto } from './create-province.dto';

export class UpdateProvinceDto extends PartialType(ProvinceDto) {}
