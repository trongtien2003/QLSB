import { Injectable } from '@nestjs/common';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Passenger } from './entities/passenger.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PassengerService {
  constructor(
    @InjectRepository(Passenger)
    private passengerRepository: Repository<Passenger>
  ) {}

  async create(data: CreatePassengerDto) {
    const toSave = this.passengerRepository.create(data);
    const res = await this.passengerRepository.save(toSave);
    return {
      statusCode: 0,
      message: 'OK',
      passenger: res,
    };
  }

  findAll() {
    return `This action returns all passenger`;
  }

  findOne(id: number) {
    return `This action returns a #${id} passenger`;
  }

  update(id: number, updatePassengerDto: UpdatePassengerDto) {
    return `This action updates a #${id} passenger`;
  }

  remove(id: number) {
    return `This action removes a #${id} passenger`;
  }
}
