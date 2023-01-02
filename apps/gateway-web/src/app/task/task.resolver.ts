import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  Task, CreateTaskInput, UpdateTaskInput, DeleteTaskOutput
} from '@samoject/interface';
import { PUB_SUB } from '@samoject/redis';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { GqlAuthGuard } from '../gql-auth.guard';
import { TaskService } from './task.service';

@Resolver(() => Task)
export class TaskResolver {
  constructor(
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
    private readonly taskService: TaskService,
  ) { }

  @Mutation(() => Task)
  createTask(@Args('createTaskInput') createTaskInput: CreateTaskInput) {
    return this.taskService.create(createTaskInput);
  }

  @Query(() => [Task])
  @UseGuards(GqlAuthGuard)
  tasks() {
    return this.taskService.findAll();
  }

  @Query(() => Task)
  async task(@Args('_id', { type: () => String }) _id: string) {
    return await this.taskService.findOne(_id);
  }

  @Mutation(() => Task)
  updateTask(@Args('updateTaskInput') updateTaskInput: UpdateTaskInput) {
    return this.taskService.update(updateTaskInput.id, updateTaskInput);
  }

  @Mutation(() => DeleteTaskOutput)
  removeTask(@Args('_id', { type: () => String }) _id: string) {
    return this.taskService.remove(_id);
  }


}