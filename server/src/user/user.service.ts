import { Injectable } from '@nestjs/common';
import { CreateUserInput, UpdateUserInput, User } from 'src/types/graphpl';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create({
    first_name,
    last_name,
    user_name,
    email,
    password,
  }: CreateUserInput) {
    return this.prisma.users.create({
      data: { first_name, last_name, user_name, email, password },
    });
  }
  createToken({ id, email }: User) {
    return jwt.sign({ email, id }, 'shaby123', {
      expiresIn: '1hr',
    });
  }
  findAll() {
    return this.prisma.users.findMany();
  }
  findOne(id: number) {
    return this.prisma.users.findUnique({
      where: { id },
      include: {
        //posts: { include: { comments: true } },
        tasks: true,
        members: true,
        posts: {include: {comments: true}},
        groups: {
          include: {
            members: {
              include: { users: { include: { tasks: true, groups: true } } },
            },
          },
        },
      },
    });
  }

  update(id: number, { first_name }: UpdateUserInput) {
    return this.prisma.users.update({
      where: { id },
      data: {
        first_name,
      },
    });
  }

  register({
    first_name,
    last_name,
    user_name,
    email,
    password,
  }: CreateUserInput) {
    return this.prisma.users.create({
      data: {
        email,
        first_name,
        last_name,
        user_name,
        password,
      },
    });
  }

  login(email: string) {
    return this.prisma.users.findUnique({
      where: { email },
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({
      where: { id },
    });
  }
}
