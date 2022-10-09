import { CreateGroupInput } from './create-group.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateGroupInput extends PartialType(CreateGroupInput) {
  id: number;
}
