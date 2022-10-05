import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput, UpdateUserInput, User } from 'src/types/graphpl';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create({ name, email, password }: CreateUserInput) {
    return this.prisma.users.create({
      data: { name, email, password },
      include: { tasks: true },
    });
  }
  createToken({id, email}: User) {
    return jwt.sign({email, id}, 'shaby123', {
      expiresIn: '1hr',
    });
  }
  // createToken(user: User) {
  //   return jwt.sign(user, 'shaby123', {
  //     expiresIn: '1hr',
  //   });
  // }
  findAll() {
    return this.prisma.users.findMany();
    //, { include: { tasks: true } };
  }
  findOne(id: number) {
    return this.prisma.users.findUnique({
      where: { id },
      include: { tasks: true },
    });
  }

  update(id: number, { name }: UpdateUserInput) {
    return this.prisma.users.update({
      where: { id },
      data: {
        name,
      },
    });
  }

  register({ name, email, password }: CreateUserInput) {
    return this.prisma.users.create({
      data: {
        name,
        email,
        password,
      },
      select: { name: true, email: true },
    });
  }

  login(email: string) {
    return this.prisma.users.findUnique({
      where: { email },
      include: { tasks: true },
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({
      where: { id },
    });
  }
}
