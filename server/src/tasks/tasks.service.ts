import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskInput, UpdateTaskInput } from 'src/types/graphpl';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}
  // create({ task, userId }: CreateTaskInput) {
  //   return this.prisma.tasks.create({
  //     data: { task, userId },
  //   });
  // }

  findAll() {
    return this.prisma.tasks.findMany();
  }

  findOne(id: number) {
    return this.prisma.tasks.findUnique({
      where: { id },
      select: { task: true, id: true},
    });
  }

  update(id: number, updateTaskInput: UpdateTaskInput) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
