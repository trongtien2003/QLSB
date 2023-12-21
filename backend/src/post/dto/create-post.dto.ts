import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;
  catId: number;
  @IsNotEmpty()
  markdown: string;
  @IsNotEmpty()
  html: string;
}
