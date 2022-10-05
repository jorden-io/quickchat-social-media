import {
  Resolver,
  Query,
  Mutation,
  Args,
  ObjectType,
  Field,
  Context,
} from '@nestjs/graphql';
import { UpdateUserInput, CreateUserInput } from 'src/types/graphpl';
import { UserService } from './user.service';
import { hash, compare } from 'bcryptjs';
import { User } from 'src/types/graphpl';
//import { isAuth } from 'src/isAuth';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@ObjectType()
class loginRes {
  @Field()
  accessToken: string;
}
@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }
  @Mutation()
  async register(
    //@Args("createUserInput") createUserInput: CreateUserInput,
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const hashedPassword = await hash(password, 12);
    //try {
    return await this.userService.register({
      name,
      email,
      password: hashedPassword,
    });
    // } catch (err) {
    //   console.log(err);
    //   return false;
    // }
    return true;
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
    return this.userService.createToken(user);

    //this.userService.createToken(user);
  }

  @Query('users')
  findAll() {
    return this.userService.findAll();
  }

  @Query()
  @UseGuards(new AuthGuard())
  me(@Context('user') user: User) {
    return this.userService.findOne(user.id)
  }

  // @Query()
  // findOne(@Args('id') id: number) {
  //   return this.userService.findOne(id);
  // }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.userService.remove(id);
  }
}
