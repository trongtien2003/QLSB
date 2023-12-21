import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/create-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  // @Post()
  // create(@Body() createLoginDto: LoginDto) {
  //   return this.loginService.create(createLoginDto);
  // }

  @Post()
  findOne(@Body() data: LoginDto) {
    return this.loginService.findOne(data);
  }
}
