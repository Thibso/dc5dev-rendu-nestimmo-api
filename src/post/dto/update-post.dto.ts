import { PartialType } from '@nestjs/mapped-types';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  title: string;
  description: string;
  category: CategoryEntity;
}
