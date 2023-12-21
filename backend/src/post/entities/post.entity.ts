import { Category } from 'src/category/entities/category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: 1 })
  catId: number;

  @Column({ type: 'longtext' })
  markdown: string;

  @Column({ type: 'longtext' })
  html: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'catId', referencedColumnName: 'id' })
  categoryData: Category;
}
