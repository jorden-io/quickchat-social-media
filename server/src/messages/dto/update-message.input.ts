import { CreateMessageInput } from './create-message.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMessageInput extends PartialType(CreateMessageInput) {
  id: number;
}
