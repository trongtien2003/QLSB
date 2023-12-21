import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
  async create(data: CreateUserDto) {
    if (!data.username || !data.email) {
      throw new HttpException(
        { message: 'Chưa điền đủ thông tin' },
        HttpStatus.BAD_REQUEST
      );
    }
    const user = await this.userRepository.findOneBy({
      email: data.email,
    });
    console.log(user);
    if (user) {
      throw new HttpException(
        { message: 'Email đã tồn tại trên hệ thống, vui lòng chọn email khác' },
        HttpStatus.BAD_REQUEST
      );
    }
    const toSaveUser = this.userRepository.create(data);
    return await this.userRepository.save(toSaveUser);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    if (!id) {
      return {
        statusCode: 1,
        message: 'Thiếu thông tin id',
      };
    }
    return await this.userRepository.findOneBy({ id });
  }

  async update(id: number, data: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      return {
        statusCode: 2,
        message: 'Người dùng không tồn tại',
      };
    await this.userRepository.update(id, { ...data });
    return {
      statusCode: 0,
      message: 'OK',
    };
  }

  async remove(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      return {
        statusCode: 2,
        message: 'Người dùng không tồn tại',
      };
    await this.userRepository.delete(id);
    return {
      statusCode: 0,
      message: 'OK',
    };
  }
}
