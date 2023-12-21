import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Repository } from 'typeorm';
import { sendSimpleEmail } from 'src/mailer/sendMailService';
import { Flight } from 'src/flight/entities/flight.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>
  ) {}
  async create(data: CreateBookingDto) {
    data.bookingDate = new Date(+data.bookingDate);
    const toSave = this.bookingRepository.create(data);
    const res = await this.bookingRepository.save(toSave);
    const flight = await this.flightRepository.findOneBy({
      id: res.flightNumber,
    });
    await this.flightRepository.update(flight.id, {
      availableSeat: +flight.availableSeat - +res.seat,
    });
    return {
      statusCode: 0,
      message: 'OK',
      booking: res,
    };
  }

  async verifyMail(data: any) {
    const check = this.bookingRepository.findOneBy({
      id: data.id,
      token: data.token,
      payStatus: 0,
    });
    if (check) {
      await this.bookingRepository.update(data.id, { payStatus: 1 });
      return {
        statusCode: 0,
        message: 'Thanh toán thành công',
      };
    }
    return {
      statusCode: 1,
      message: 'Vé đã được thanh toán hoặc không tồn tại',
    };
  }

  async sendEmail(data: any) {
    const booking = await this.bookingRepository.findOne({
      where: {
        passengerId: data.passengerId,
        id: data.id,
      },
      relations: {
        passengerData: true,
        flightData: {
          sourceData: true,
          destinationData: true,
          airlineData: true,
        },
      },
    });
    const dataSend = {
      flightNumber: booking.flightNumber,
      name: booking.passengerData.name,
      source: booking.flightData.sourceData.name,
      destination: booking.flightData.destinationData.name,
      date: booking.flightData.travelDate,
      time: booking.flightData.departureTime,
      redirectLink: `${process.env.REACT_URL}/pay?id=${booking.id}&token=${booking.token}`,
      receiverEmail: booking.passengerData.email,
      seatId: booking.seatId,
      airline: booking.flightData.airlineData.name,
    };
    await sendSimpleEmail(dataSend);
  }

  async findAll() {
    return await this.bookingRepository.find({
      relations: {
        passengerData: true,
      },
      order: {
        createdAt: 'desc',
      },
    });
  }

  async findByEmail(seatId: string) {
    return await this.bookingRepository.findOne({
      relations: {
        passengerData: true,
        flightData: {
          sourceData: true,
          destinationData: true,
          airlineData: true,
        },
        returnFlightData: {
          sourceData: true,
          destinationData: true,
          airlineData: true,
        },
      },
      where: {
        seatId: seatId,
      },
    });
  }

  async findOne(id: number) {
    return await this.bookingRepository.findOneBy({ id });
  }

  async update(id: number, data: UpdateBookingDto) {
    if (!id) {
      return {
        statusCode: 1,
        message: 'Thiếu thông tin id',
      };
    }
    const exist = this.bookingRepository.findOneBy({ id });
    if (!exist)
      return {
        statusCode: 2,
        message: 'Không tìm thấy bản ghi nào',
      };
    await this.bookingRepository.update(id, { ...data });
    return {
      statusCode: 0,
      message: 'OK',
    };
  }

  async remove(id: number) {
    if (!id) {
      return {
        statusCode: 1,
        message: 'Thiếu thông tin id',
      };
    }
    const exist = await this.bookingRepository.findOneBy({ id });
    if (!exist)
      return {
        statusCode: 2,
        message: 'Không tìm thấy bản ghi nào',
      };
    await this.bookingRepository.delete(id);
    const flight = await this.flightRepository.findOneBy({
      id: exist.flightNumber,
    });
    await this.flightRepository.update(flight.id, {
      availableSeat: +flight.availableSeat + +exist.seat,
    });
    return {
      statusCode: 0,
      message: 'OK',
    };
  }
}
