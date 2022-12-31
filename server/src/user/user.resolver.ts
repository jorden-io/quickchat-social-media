import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UpdateUserInput, CreateUserInput } from 'src/types/graphpl';
import { UserService } from './user.service';
import { hash, compare } from 'bcryptjs';
import { User } from 'src/types/graphpl';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }
  @Mutation('register')
  async register(
    @Args('gender') gender: string,
    @Args('avatar_src') avatar_src: string,
    @Args('first_name') first_name: string,
    @Args('last_name') last_name: string,
    @Args('user_name') user_name: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const hashedPassword = await hash(password, 12);
    return await this.userService.register({
      avatar_src,
      gender,
      first_name,
      last_name,
      user_name,
      email,
      password: hashedPassword,
    });
  }

  @Mutation()
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const user = await this.userService.login(email);
    if (!user) {
      throw new Error('wrong email or password');
    }
    const valid = await compare(password, user.password);
    if (!valid) {
      throw new Error('wrong password');
    }
    return this.userService.createAccessToken(user);
  }

  @Query('users')
  findAll() {
    return this.userService.findAll();
  }

  @Query()
  @UseGuards(new AuthGuard())
  me(@Context('user') user: User) {
    return this.userService.findOne(user.id);
  }

  @Query('findUser')
  findByUsername(@Args('user_name') user_name: string) {
    return this.userService.findUser(user_name);
  }
  @Query('user')
  findOne(@Args('id') id: number) {
    return this.userService.findOne(id);
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.userService.remove(id);
  }
}
