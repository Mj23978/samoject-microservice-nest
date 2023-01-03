import { Injectable } from '@nestjs/common';
import {
  TaskCreateInput,
  TaskUpdateInput,
} from '@samoject/prisma';
import { PrismaService } from '@samoject/prisma';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getData(): { message: string } {
    return { message: 'Welcome to user!' };
  }

  async create(data: TaskCreateInput) {
    return await this.prisma.task.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.task.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.task.findUnique({
      include: { subTasks: true, _count: { select: { subTasks: true } } },
      where: { id },
    });
  }

  async update(id: string, data: TaskUpdateInput) {
    return this.prisma.task.update({
      where: { id },
      data: {
        ...data
      },
    });
  }

  async remove(id: string) {
    return this.prisma.task.delete({ where: { id } });
  }
}
