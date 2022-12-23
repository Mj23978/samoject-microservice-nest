import {
  IncomingMessage,
  CreateUserInput,
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
    console.log('MinionAppController: sum', data);
    return this.appService.sum(data);
  }

  @MessagePattern('createUser')
  @Post('user')
  async create(@Body() data: CreateUserInput, @Payload() message: IncomingMessage<CreateUserInput>) {
    if (data.username) {
      return await this.appService.create(data);
    } else {
      const user = message.value;
      return await this.appService.create(user);
    }
  }

  @MessagePattern('findAllUser')
  findAll() {
    return this.appService.findAll();
  }

  @MessagePattern('findOneUser')
  findOne(@Payload() message: IncomingMessage<{ id: string }>) {
    return this.appService.findOne(message.value.id);
  }

  @MessagePattern('updateUser')
  update(@Payload() message: IncomingMessage<CreateUserInput & { id: string }>) {
    const user = message.value;
    return this.appService.update(message.value.id, { ...user });
  }

  @MessagePattern('removeUser')
  remove(@Payload() message: IncomingMessage<{ id: string }>) {
    return this.appService.remove(message.value.id);
  }
}
