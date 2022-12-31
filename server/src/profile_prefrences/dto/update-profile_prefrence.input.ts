import { CreateProfilePrefrenceInput } from './create-profile_prefrence.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateProfilePrefrenceInput extends PartialType(CreateProfilePrefrenceInput) {
  id: number;
}
