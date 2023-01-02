import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { natsConfig } from '@samoject/core';
import { TaskResolver } from './task.resolver';
import { TaskService } from './task.service';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'TASK_SERVICE',
      ...natsConfig,
    }]),
  ],
  providers: [TaskResolver, TaskService],
})
export class TaskModule { }
