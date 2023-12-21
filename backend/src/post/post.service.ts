import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>
  ) {}

  async create(data: CreatePostDto) {
    const _data = this.postRepository.create(data);
    const res = await this.postRepository.save(_data);
    return {
      statusCode: 0,
      message: 'OK',
      post: res,
    };
  }

  async findAll() {
    return await this.postRepository.find({
      relations: {
        categoryData: true,
      },
    });
  }
  async findPostByCatId(catId: number) {
    return await this.postRepository.find({
      relations: {
        categoryData: true,
      },
      where: {
        catId: catId,
      },
    });
  }

  async findOne(id: number) {
    return await this.postRepository.findOne({
      relations: {
        categoryData: true,
      },
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const exist = await this.postRepository.findOneBy({ id });
    if (!exist)
      throw new HttpException(
        { message: 'Không tìm thấy bản ghi để cập nhật' },
        HttpStatus.BAD_REQUEST
      );
    await this.postRepository.update(id, { ...updatePostDto });
    return {
      statusCode: 0,
      message: 'OK',
    };
  }

  async remove(id: number) {
    const exist = await this.postRepository.findOneBy({ id });
    if (!exist)
      throw new HttpException(
        { message: 'Không tìm thấy bản ghi để xoá' },
        HttpStatus.BAD_REQUEST
      );
    await this.postRepository.delete(id);
    return {
      statusCode: 0,
      message: 'OK',
    };
  }
}
