import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMessageInput, UpdateMessageInput } from 'src/types/graphpl';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}
  create({group_id, user_id, message}: CreateMessageInput) {
    return this.prisma.group_messages.create({
      data: {
        message, group_id, user_id
      }
    })
  }

  findAll() {
    return this.prisma.group_messages.findMany()
  }

  findOne(message_id: number) {
    return this.prisma.group_messages.findUnique({where: {message_id}})
  }

  update(id: number, updateMessageInput: UpdateMessageInput) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
