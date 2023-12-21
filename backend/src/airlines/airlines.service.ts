import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAirlineDto } from './dto/create-airline.dto';
import { UpdateAirlineDto } from './dto/update-airline.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Airline } from './entities/airline.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AirlinesService {
  constructor(
    @InjectRepository(Airline)
    private airlineRepository: Repository<Airline>
  ) {}

  async create(createAirlineDto: CreateAirlineDto) {
    const _data = this.airlineRepository.create(createAirlineDto);
    await this.airlineRepository.save(_data);
    return {
      statusCode: 0,
      message: 'OK',
    };
  }

  async findAll() {
    return await this.airlineRepository.find();
  }

  async findOne(id: number) {
    return await this.airlineRepository.findOneBy({ id });
  }

  async update(id: number, updateAirlineDto: UpdateAirlineDto) {
    if (!this.isExist(id))
      throw new HttpException(
        { message: 'Không tồn tại bản ghi' },
        HttpStatus.BAD_REQUEST
      );
    await this.airlineRepository.update(id, { ...updateAirlineDto });
    return {
      statusCode: 0,
      message: 'OK',
    };
  }

  async remove(id: number) {
    if (!this.isExist(id))
      throw new HttpException(
        { message: 'Không tồn tại bản ghi' },
        HttpStatus.BAD_REQUEST
      );
    await this.airlineRepository.delete(id);
    return {
      statusCode: 0,
      message: 'OK',
    };
  }

  async isExist(id: number) {
    const exist = await this.airlineRepository.findOneBy({ id });
    if (exist) return true;
    return false;
  }
}
