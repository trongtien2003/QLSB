import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from './entities/flight.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>
  ) {}
  async create(data: CreateFlightDto) {
    if (!data)
      return {
        statusCode: 1,
        message: 'Thiếu thông tin cần thiết',
      };
    data.travelDate = new Date(data.travelDate);
    const toSave = this.flightRepository.create(data);
    await this.flightRepository.save(toSave);
    return {
      statusCode: 0,
      message: 'OK',
    };
  }

  async findByDate(date: string) {
    return await this.flightRepository.find({
      where: {
        travelDate: new Date(+date),
      },
      relations: {
        airlineData: true,
        sourceData: true,
        destinationData: true,
      },
    });
  }

  async findFlightLst(data: any) {
    if (!data.destination || !data.source || !data.travelDate) {
      return {
        statusCode: 1,
        message: 'Thiếu thông tin',
      };
    }
    return await this.flightRepository.find({
      relations: {
        sourceData: true,
        destinationData: true,
        airlineData: true,
      },
      where: {
        source: data.source,
        destination: data.destination,
        travelDate: new Date(+data.travelDate),
      },
    });
  }

  async findAll() {
    return await this.flightRepository.find({
      relations: {
        sourceData: true,
        destinationData: true,
        airlineData: true,
      },
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    return await this.flightRepository.findOne({
      relations: {
        airlineData: true,
        sourceData: true,
        destinationData: true,
      },
      where: {
        id: id,
      },
    });
  }

  async update(id: number, data: UpdateFlightDto) {
    const fl = await this.flightRepository.findOneBy({ id });
    if (!fl)
      return {
        statusCode: 2,
        message: 'Lịch bay không tồn tại',
      };
    await this.flightRepository.update(id, { ...data });
    return {
      statusCode: 0,
      message: 'OK',
    };
  }

  async remove(id: number) {
    const fl = await this.flightRepository.findOneBy({ id });
    if (!fl)
      return {
        statusCode: 2,
        message: 'Lịch bay không tồn tại',
      };
    await this.flightRepository.delete(id);
    return {
      statusCode: 0,
      message: 'OK',
    };
  }
}
