import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MembersService } from './members.service';
import { CreateMemberInput, UpdateMemberInput } from 'src/types/graphpl';

@Resolver('Member')
export class MembersResolver {
  constructor(private readonly membersService: MembersService) {}

  @Mutation('join')
  create(@Args('createMemberInput') createMemberInput: CreateMemberInput) {
    return this.membersService.join(createMemberInput);
  }

  @Query('memberinfo')
  memberInfo(@Args('member_id') member_id: number) {
    return this.membersService.findMembers(member_id);
  }

  @Query('members')
  findAll() {
    return this.membersService.findAll();
  }

  @Query('member')
  findOne(@Args('id') id: number) {
    return this.membersService.findOne(id);
  }

  @Mutation('updateMember')
  update(@Args('updateMemberInput') updateMemberInput: UpdateMemberInput) {
    return this.membersService.update(updateMemberInput.id, updateMemberInput);
  }

  @Mutation('removeMember')
  leave(@Args('id') id: number) {
    return this.membersService.leave(id);
  }
}
