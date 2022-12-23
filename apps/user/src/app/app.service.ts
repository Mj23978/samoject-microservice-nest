import { Injectable } from '@nestjs/common';
import {
  CreateUserInput
} from '@samoject/interface';
import { PrismaService } from '@samoject/prisma';

@Injectable()
export class AppService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  getData(): { message: string } {
    return { message: 'Welcome to user!' };
  }

  public sum(data: number[]): number {
    console.log('MinionAppService: sum', data);
    return (data || []).reduce((a, b) => a + b);
  }

  async create(data: CreateUserInput) {
    return await this.prisma.user.create({ data: {
      ...data
    } });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, data: CreateUserInput) {
    return this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.user
      .delete({ where: { id } });
  }
}
