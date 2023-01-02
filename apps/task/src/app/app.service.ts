import { Injectable } from '@nestjs/common';
import {
  CreateTaskInput,
  UpdateTaskInputWithoutSubTasks,
} from '@samoject/interface';
import { PrismaService } from '@samoject/prisma';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getData(): { message: string } {
    return { message: 'Welcome to user!' };
  }

  async create(data: CreateTaskInput) {
    return await this.prisma.task.create({
      data: {
        details: data.details,
        // assignes: {
        //   connect: data.assignes.map((v) => ({
        //     taskId_userId: {
        //       userId: v,
        //       taskId: null
        //     }
        //   }))
        // },
        // parent: {
        //   connect: {
        //     id: data.parentId
        //   }
        // },
        parentId: data.parentId,
        status: data.status,
        //   project: {
        //     connect: {
        //       id: data.projectId
        //     }
        //   },
        //   creator: {
        //     connect: {
        //       id: data.userId
        //     }
        //   },
        //   chat: {
        //     create: {
        //       User: { connect: { id: data.userId } }
        //     }
        //   }
      },
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

  async update(id: string, data: UpdateTaskInputWithoutSubTasks) {
    return this.prisma.task.update({
      where: { id },
      data: {
        details: data.details,
        assignes: {
          connect: data.assignes.map((v) => ({
            taskId_userId: {
              userId: v,
              taskId: null,
            },
          })),
        },
        parent: {
          connect: {
            id: data.parentId,
          },
        },
        status: data.status,
        project: {
          connect: {
            id: data.projectId,
          },
        },
      },
    });
  }

  async remove(id: string) {
    return this.prisma.task.delete({ where: { id } });
  }
}
