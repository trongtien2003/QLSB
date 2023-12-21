import { Flight } from 'src/flight/entities/flight.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('province')
export class Province {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  code: string;

  @Column()
  name: string;

  @Column()
  airportName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Flight, (flight) => flight.sourceData)
  @OneToMany(() => Flight, (flight) => flight.destinationData)
  flight: Flight[];
}
