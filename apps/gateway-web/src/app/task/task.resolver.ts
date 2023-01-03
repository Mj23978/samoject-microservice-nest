import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeleteTaskOutput } from '@samoject/interface';
import { Task, TaskCreateInput, TaskUpdateInput } from '@samoject/prisma';
import { PUB_SUB } from '@samoject/redis';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { GqlAuthGuard } from '../gql-auth.guard';
import { TaskService } from './task.service';

@Resolver(() => Task)
export class TaskResolver {
  constructor(
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
    private readonly taskService: TaskService
  ) {}

  @Mutation(() => Task)
  createTask(@Args('createTaskInput') createTaskInput: TaskCreateInput) {
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
  updateTask(@Args('updateTaskInput') updateTaskInput: TaskUpdateInput) {
    return this.taskService.update(updateTaskInput.id.set, updateTaskInput);
  }

  @Mutation(() => DeleteTaskOutput)
  removeTask(@Args('_id', { type: () => String }) _id: string) {
    return this.taskService.remove(_id);
  }
}
