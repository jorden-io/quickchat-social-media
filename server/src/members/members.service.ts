import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMemberInput, UpdateMemberInput } from 'src/types/graphpl';
@Injectable()
export class MembersService {
  constructor(private prisma: PrismaService) {}
  join({ group_id, member_id }: CreateMemberInput) {
    return this.prisma.members.create({
      data: {
        group_id,
        member_id,
      },
    });
  }

  findAll() {
    return this.prisma.members.findMany();
  }

  findMembers(member_id: number) {
    return this.prisma.members.findUnique({
      where: { member_id },
      include: { users: true, group: true },
    });
  }

  findOne(member_id: any) {
    return this.prisma.members.findUnique({
      where: { member_id },
      include: { users: true, group: true },
    });
  }

  update(id: number, updateMemberInput: UpdateMemberInput) {
    return `This action updates a #${id} member`;
  }

  leave(member_id: any) {
    return this.prisma.members.delete({
      where: { member_id },
    });
  }
}
