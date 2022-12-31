import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateProfilePrefrenceInput,
  UpdateProfilePrefrenceInput,
} from 'src/types/graphpl';
@Injectable()
export class ProfilePrefrencesService {
  constructor(private prisma: PrismaService) {}
  create({
    accent_color,
    background_color,
    frame_color,
    user_id,
  }: CreateProfilePrefrenceInput) {
    try {
      return this.prisma.profile_prefrences.create({
        data: {
          accent_color,
          background_color,
          frame_color,
          user_id,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  findAll() {
    return this.prisma.profile_prefrences.findMany();
  }

  findOne(id: number) {
    return this.prisma.profile_prefrences.findUnique({
      where: {
        id,
      },
    });
  }

  update(
    id: number,
    {
      accent_color,
      background_color,
      frame_color,
    }: UpdateProfilePrefrenceInput,
  ) {
    return this.prisma.profile_prefrences.update({
      where: { id },
      data: {
        accent_color,
        background_color,
        frame_color,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} profilePrefrence`;
  }
}
