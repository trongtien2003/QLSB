import { Airline } from 'src/airlines/entities/airline.entity';
import { Booking } from 'src/booking/entities/booking.entity';
import { Province } from 'src/province/entities/province.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('flight')
export class Flight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'time' })
  arrivalTime: string;

  @Column({ type: 'time' })
  departureTime: string;

  @Column()
  availableSeat: number;

  @Column({ nullable: true })
  destination: string;

  @Column({ nullable: true })
  source: string;

  @Column()
  travelDate: Date;

  @Column({ type: 'float' })
  price: number;

  @Column({ nullable: true })
  airlineId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Booking, (booking) => booking.flightData)
  bookingData: Booking[];

  @OneToMany(() => Booking, (booking) => booking.returnFlightData)
  bookingReturnData: Booking[];

  @ManyToOne(() => Province)
  @JoinColumn({ name: 'source', referencedColumnName: 'code' })
  sourceData: Province;

  @ManyToOne(() => Province)
  @JoinColumn({ name: 'destination', referencedColumnName: 'code' })
  destinationData: Province;

  @ManyToOne(() => Airline)
  @JoinColumn({ name: 'airlineId', referencedColumnName: 'id' })
  airlineData: Airline;
}
