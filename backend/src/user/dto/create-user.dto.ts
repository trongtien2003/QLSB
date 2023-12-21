import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  fullname: string;

  isAdmin: number;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  phone: string;
}
