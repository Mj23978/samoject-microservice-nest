import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTaskInput, LoginInput, Task, TaskEvent, UpdateTaskInput } from '@samoject/interface';
import { Session } from '@supabase/supabase-js';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_SERVICE') private taskClient: ClientProxy,
  ) { }

  async create(data: CreateTaskInput): Promise<Task> {
    const taskCreateObs = this.taskClient.send<Task | { error: any }>({ cmd: TaskEvent.CREATE_TASK }, {
      ...data,
      active: true,
    });
    const taskCreateRes = await firstValueFrom(taskCreateObs);
    if (taskCreateRes.hasOwnProperty('error')) {
      throw taskCreateRes;
    }
    return taskCreateRes as Task;
  }

  findAll() {
    return this.taskClient.send({ cmd: TaskEvent.FIND_ALL_TASK }, {});
  }

  async findOne(id: string): Promise<Task> {
    const taskFindObs = this.taskClient.send({ cmd: TaskEvent.FIND_ONE_TASK }, { value: { id } })
    const taskFindRes = await firstValueFrom(taskFindObs);
    return taskFindRes;
  }

  update(id: string, updateTaskInput: UpdateTaskInput) {
    return this.taskClient.send({ cmd: TaskEvent.UPDATE_TASK }, {
      id,
      ...updateTaskInput,
    });
  }

  remove(id: string) {
    return this.taskClient.send({ cmd: TaskEvent.REMOVE_TASK }, { value: { id } });
  }

}

