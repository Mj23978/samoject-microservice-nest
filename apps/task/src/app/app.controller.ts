import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PrismaClientExceptionFilter } from '@samoject/core';
import {
  CreateTaskInput, IncomingMessage, TaskEvent
} from '@samoject/interface';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern({ cmd: TaskEvent.CREATE_TASK })
  @UseFilters(PrismaClientExceptionFilter)
  async create(@Body() data: CreateTaskInput) {
    return await this.appService.create(data);
  }

  @MessagePattern({ cmd: TaskEvent.FIND_ALL_TASK })
  findAll() {
    return this.appService.findAll();
  }

  @MessagePattern({ cmd: TaskEvent.FIND_ONE_TASK })
  findOne(@Body() data: IncomingMessage<{ id: string; }>) {
    return this.appService.findOne(data.value.id);
  }

  @MessagePattern({ cmd: TaskEvent.UPDATE_TASK })
  update(@Body() data: CreateTaskInput & { id: string }) {
    return this.appService.update(data.id, data);
  }

  @MessagePattern({ cmd: TaskEvent.REMOVE_TASK })
  @UseFilters(PrismaClientExceptionFilter)
  remove(@Body() data: { id: string }) {
    return this.appService.remove(data.id);
  }
}
