import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentInput, UpdateCommentInput } from 'src/types/graphpl';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}
  create({ comment_body, post_id, user_id }: CreateCommentInput) {
    return this.prisma.comments.create({
      data: {
        comment_body,
        post_id,
        user_id,
      },
    });
  }

  findAll() {
    return this.prisma.comments.findMany();
  }

  findOne(comment_id: number) {
    return this.prisma.comments.findUnique({
      where: { comment_id },
    });
  }

  update(id: number, updateCommentInput: UpdateCommentInput) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
