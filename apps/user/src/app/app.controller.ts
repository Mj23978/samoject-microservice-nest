import {
  IncomingMessage,
  CreateUserInput,
  UserEvent,
} from '@samoject/interface';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern({ cmd: 'sum' })
  sum(data: number[]): number {
    return this.appService.sum(data);
  }

  @MessagePattern({ cmd: UserEvent.CREATE_USER })
  @Post('user')
  async create(@Body() data: CreateUserInput, @Payload() message: IncomingMessage<CreateUserInput>) {
    if (data.username) {
      return await this.appService.create(data);
    } else {
      const user = message.value;
      return await this.appService.create(user);
    }
  }

  @MessagePattern({ cmd: UserEvent.FIND_ALL_USER })
  findAll() {
    return this.appService.findAll();
  }

  @MessagePattern({ cmd: UserEvent.FIND_ONE_USER })
  findOne(@Payload() message: IncomingMessage<{ id: string }>) {
    return this.appService.findOne(message.value.id);
  }

  @MessagePattern({ cmd: UserEvent.UPDATE_USER })
  update(@Payload() message: IncomingMessage<CreateUserInput & { id: string }>) {
    const user = message.value;
    return this.appService.update(message.value.id, { ...user });
  }

  @MessagePattern({ cmd: UserEvent.REMOVE_USER })
  remove(@Payload() message: IncomingMessage<{ id: string }>) {
    return this.appService.remove(message.value.id);
  }
}
