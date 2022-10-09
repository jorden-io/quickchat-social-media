import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { CreateTaskInput, UpdateTaskInput } from 'src/types/graphpl';

@Resolver('Task')
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Mutation('createTask')
  create(@Args('createTaskInput') createTaskInput: CreateTaskInput) {
    return this.tasksService.create(createTaskInput);
  }

  @Query('tasks')
  findAll() {
    return this.tasksService.findAll();
  }

  @Query('task')
  findOne(@Args('id') id: number) {
    return this.tasksService.findOne(id);
  }

  @Mutation('updateTask')
  update(@Args('updateTaskInput') updateTaskInput: UpdateTaskInput) {
    return this.tasksService.update(updateTaskInput.id, updateTaskInput);
  }

  @Mutation('removeTask')
  remove(@Args('id') id: number) {
    return this.tasksService.remove(id);
  }
}
