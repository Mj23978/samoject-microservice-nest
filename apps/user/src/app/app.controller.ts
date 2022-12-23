import {
  IncomingMessage,
  CreateUserInput,
} from '@samoject/interface';
import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern('createUser')
  async create(@Payload() message: IncomingMessage<CreateUserInput>) {
    const user = message.value;
    return await this.appService.create(user);
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
