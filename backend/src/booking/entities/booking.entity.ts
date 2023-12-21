import { Flight } from 'src/flight/entities/flight.entity';
import { Passenger } from 'src/passenger/entities/passenger.entity';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as generateUniqueId from 'generate-unique-id';

@Entity('booking')
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookingDate: Date;

  @Column()
  flightNumber: number;

  @Column({ default: 0, nullable: true })
  isRoundTrip: number;

  @Column({ nullable: true })
  returnFlightNumber: number;

  @Column()
  seat: number;

  @Column({ nullable: true })
  passengerId: number;

  @Column({ default: 0 })
  payStatus: number;

  @Column({ type: 'float' })
  amount: number;

  @Column()
  @Generated('uuid')
  token: string;

  @BeforeInsert()
  generateSeatId() {
    const text = generateUniqueId({
      length: 5,
      useLetters: false,
    });
    this.seatId = text;
  }
  @Column({ nullable: true })
  seatId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Passenger)
  @JoinColumn({ name: 'passengerId', referencedColumnName: 'id' })
  passengerData: Passenger;

  @ManyToOne(() => Flight)
  @JoinColumn({ name: 'flightNumber', referencedColumnName: 'id' })
  flightData: Flight;

  @ManyToOne(() => Flight)
  @JoinColumn({ name: 'returnFlightNumber', referencedColumnName: 'id' })
  returnFlightData: Flight;
}
