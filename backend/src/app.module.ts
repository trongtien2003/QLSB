import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { TicketModule } from './ticket/ticket.module';
import { BookingModule } from './booking/booking.module';
import { PassengerModule } from './passenger/passenger.module';
import { FlightModule } from './flight/flight.module';
import { Booking } from './booking/entities/booking.entity';
import { Flight } from './flight/entities/flight.entity';
import { Passenger } from './passenger/entities/passenger.entity';
import { Ticket } from './ticket/entities/ticket.entity';
import { LoginModule } from './login/login.module';
import { ProvinceModule } from './province/province.module';
import { Province } from './province/entities/province.entity';
import { AirlinesModule } from './airlines/airlines.module';
import { Airline } from './airlines/entities/airline.entity';
import { PostModule } from './post/post.module';
import { Post } from './post/entities/post.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USER,
      password: '',
      database: process.env.DB_NAME,
      entities: [
        User,
        Booking,
        Flight,
        Passenger,
        Ticket,
        Province,
        Airline,
        Post,
        Category,
      ],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    TicketModule,
    BookingModule,
    PassengerModule,
    FlightModule,
    LoginModule,
    ProvinceModule,
    AirlinesModule,
    PostModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
