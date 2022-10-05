import { CreateTaskInput } from './create-task.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTaskInput extends PartialType(CreateTaskInput) {
  id: number;
}
