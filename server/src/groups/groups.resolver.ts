import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GroupsService } from './groups.service';
import { CreateGroupInput, UpdateGroupInput } from 'src/types/graphpl'; 

@Resolver('Group')
export class GroupsResolver {
  constructor(private readonly groupsService: GroupsService) {}

  @Mutation('createGroup')
  creatGroup(@Args('createGroupInput') createGroupInput: CreateGroupInput) {
    return this.groupsService.create(createGroupInput);
  }

  @Query('groups')
  findAll() {
    return this.groupsService.findAll();
  }

  @Query('group')
  findOne(@Args('id') id: number) {
    return this.groupsService.findOne(id);
  }

  @Mutation('updateGroup')
  update(@Args('updateGroupInput') updateGroupInput: UpdateGroupInput) {
    return this.groupsService.update(updateGroupInput.id, updateGroupInput);
  }

  @Mutation('removeGroup')
  remove(@Args('id') id: number) {
    return this.groupsService.remove(id);
  }
}
