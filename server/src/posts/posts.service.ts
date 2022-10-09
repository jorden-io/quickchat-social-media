import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostInput, UpdatePostInput } from 'src/types/graphpl';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}
  create({ post_body, post_title, user_id }: CreatePostInput) {
    return this.prisma.posts.create({
      data: {
        user_id,
        post_body,
        post_title,
      },
    });
  }

  findAll() {
    return this.prisma.posts.findMany({
       include: {comments: true}
    });
  }

  findOne(post_id: number) {
    return this.prisma.posts.findUnique({
      where: { post_id },
      include: { comments: true },
    });
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
