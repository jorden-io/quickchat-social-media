import { CreateMemberInput } from './create-member.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMemberInput extends PartialType(CreateMemberInput) {
  id: number;
}
