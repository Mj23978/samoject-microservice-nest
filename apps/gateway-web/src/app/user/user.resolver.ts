import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import {
  CreateUserInput, DeleteUserOutput, UpdateUserInput, User
} from '@samoject/interface';
import { PUB_SUB, SUBSCRIPTION_EVENTS } from '@samoject/redis';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { GqlAuthGuard } from '../gql-auth.guard';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
     private readonly userService: UserService,
    ) { }
  allSubscribers: User[] = [];

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User])
  @UseGuards(GqlAuthGuard)
  users() {
    return this.userService.findAll();
  }

  @Query(() => User)
  user(@Args('_id', { type: () => String }) _id: string) {
    return this.userService.findOne(_id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => DeleteUserOutput)
  removeUser(@Args('_id', { type: () => String }) _id: string) {
    return this.userService.remove(_id);
  }

  @Mutation(() => User)
  addPerson(@Args('person') person: CreateUserInput) {
    const user = <User>{ 
      ...person,
      id: 'nbjljkbghxdxtyfihj',
      createdAt: new Date(),
      updatedAt: new Date(), 
    };
    this.allSubscribers.push(user);
    this.pubSub.publish(SUBSCRIPTION_EVENTS.newPerson, { newPerson: user });
    return user;
  }

  @Subscription(() => User)
  newPerson() {
    return this.pubSub.asyncIterator(SUBSCRIPTION_EVENTS.newPerson);
  }

}