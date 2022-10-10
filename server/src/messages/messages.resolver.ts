import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateMessageInput, UpdateMessageInput } from 'src/types/graphpl';
import { MessagesService } from './messages.service';

@Resolver('Message')
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @Mutation('createMessage')
  create(@Args('createMessageInput') createMessageInput: CreateMessageInput) {
    return this.messagesService.create(createMessageInput);
  }

  @Query('messages')
  findAll() {
    return this.messagesService.findAll();
  }

  @Query('message')
  findOne(@Args('id') id: number) {
    return this.messagesService.findOne(id);
  }

  @Mutation('updateMessage')
  update(@Args('updateMessageInput') updateMessageInput: UpdateMessageInput) {
    return this.messagesService.update(updateMessageInput.message_id, updateMessageInput);
  }

  @Mutation('removeMessage')
  remove(@Args('id') id: number) {
    return this.messagesService.remove(id);
  }
}
