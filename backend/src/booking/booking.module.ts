import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Flight } from 'src/flight/entities/flight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Booking, Flight])],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
