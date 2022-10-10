import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGroupInput, UpdateGroupInput } from 'src/types/graphpl';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}
  create({ group_name, description, leader_id }: CreateGroupInput) {
    return this.prisma.groups.create({
      data: { group_name, description, leader_id },
    });
  }

  findAll() {
    return this.prisma.groups.findMany({
      include: { members: { include: { users: true, group: true } } },
    });
  }

  findOne(group_id: number) {
    return this.prisma.groups.findUnique({
      where: { group_id },
      //include: {members: true, users: true}
      include: {
        group_messages: true, 
        users: {include: {groups: true, tasks: true, members: true}},
        members: { include: {group: true, users: { include: { tasks: true } } } },
      },
    });
  }

  update(group_id: number, { group_name, description }: UpdateGroupInput) {
    return this.prisma.groups.update({
      where: { group_id },
      data: { group_name, description },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
