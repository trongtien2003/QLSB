import { ProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Province } from './entities/province.entity';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ProvinceService {
  constructor(
    @InjectRepository(Province)
    private provinceRepository: Repository<Province>
  ) {}

  async create(data: ProvinceDto) {
    const exist = await this.provinceRepository.findOneBy({
      code: data.code,
    });
    if (exist) {
      throw new HttpException(
        { message: 'Đã tồn tại địa điểm này' },
        HttpStatus.BAD_REQUEST
      );
    }
    const _data = this.provinceRepository.create(data);
    const res = await this.provinceRepository.save(_data);
    return {
      statusCode: 0,
      message: 'OK',
      province: res,
    };
  }

  async findAll() {
    return await this.provinceRepository.find();
  }

  async findOne(id: number) {
    return await this.provinceRepository.findOneBy({
      id: id,
    });
  }

  async update(id: number, updateProvinceDto: UpdateProvinceDto) {
    if (!this.checkExist(id)) {
      throw new HttpException(
        { message: 'Không tìm thấy địa điểm để cập nhật' },
        HttpStatus.BAD_REQUEST
      );
    }
    await this.provinceRepository.update(id, { ...updateProvinceDto });
    return {
      statusCode: 0,
      message: 'OK',
    };
  }

  async remove(id: number) {
    if (!this.checkExist(id)) {
      throw new HttpException(
        { message: 'Không tìm thấy địa điểm để xóa' },
        HttpStatus.BAD_REQUEST
      );
    }
    await this.provinceRepository.delete(id);
    return {
      statusCode: 0,
      message: 'OK',
    };
  }

  async checkExist(id: number) {
    const exist = await this.provinceRepository.findOneBy({ id });
    if (exist) return true;
    return false;
  }
}
