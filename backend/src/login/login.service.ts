import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/create-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
  // create(loginDto: LoginDto) {
  //   return 'This action adds a new login';
  // }

  async findOne(data: LoginDto) {
    const user = await this.userRepository.findOneBy({
      email: data.email,
    });
    if (!user) {
      throw new HttpException(
        { message: 'Email không tồn tại trên hệ thống' },
        HttpStatus.BAD_REQUEST
      );
    }
    if (user.password != data.password) {
      throw new HttpException(
        { message: 'Mật khẩu chưa chính xác' },
        HttpStatus.BAD_REQUEST
      );
    }
    return {
      statusCode: 0,
      message: 'OK',
      user: user,
    };
  }
}
