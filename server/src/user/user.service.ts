import { Injectable } from '@nestjs/common';
import { CreateUserInput, UpdateUserInput, User } from 'src/types/graphpl';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create({
    avatar_src,
    gender,
    first_name,
    last_name,
    user_name,
    email,
    password,
  }: CreateUserInput) {
    return this.prisma.users.create({
      data: {
        avatar_src,
        gender,
        first_name,
        last_name,
        user_name,
        email,
        password,
      },
    });
  }
  createAccessToken({ id, email }: User) {
    return jwt.sign({ email, id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '1hr',
    });
  }
  createRefreshToken({ id, email }: User) {
    return jwt.sign({ email, id }, process.env.REFESH_TOKEN_SECRET, {
      expiresIn: '7d',
    });
  }
  findAll() {
    return this.prisma.users.findMany();
  }
  findUser(user_name: string) {
    return this.prisma.users.findUnique({
      where: { user_name },
      include: {
        profile_prefrences: true,
        posts: { include: { comments: true } },
      },
    });
  }
  findOne(id: number) {
    return this.prisma.users.findUnique({
      where: { id },
      include: {
        profile_prefrences: true,
        tasks: true,
        members: true,
        comments: true,
        posts: { include: { comments: true } },
        groups: {
          include: {
            group_messages: true,
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
    avatar_src,
    gender,
    first_name,
    last_name,
    user_name,
    email,
    password,
  }: CreateUserInput) {
    return this.prisma.users.create({
      data: {
        avatar_src,
        gender,
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
