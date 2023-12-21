import { Module } from '@nestjs/common';
import { AirlinesService } from './airlines.service';
import { AirlinesController } from './airlines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Airline } from './entities/airline.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Airline])],
  controllers: [AirlinesController],
  providers: [AirlinesService],
})
export class AirlinesModule {}
