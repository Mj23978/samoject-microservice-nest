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

  async create(data: CreateUserInput) {
    return await this.prisma.user.create({ data });
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

  async remove(_id: string) {
    return this.prisma.user
      .findByIdAndDelete(_id)
      .then(() => ({ deleted: true }))
      .catch(() => ({ deleted: false }));
  }
}
