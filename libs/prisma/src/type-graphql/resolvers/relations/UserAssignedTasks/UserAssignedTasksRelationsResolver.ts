import * as TypeGraphQL from "type-graphql";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { UserAssignedTasks } from "../../../models/UserAssignedTasks";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserAssignedTasks)
export class UserAssignedTasksRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Task, {
    nullable: false
  })
  async task(@TypeGraphQL.Root() userAssignedTasks: UserAssignedTasks, @TypeGraphQL.Ctx() ctx: any): Promise<Task> {
    return getPrismaFromContext(ctx).userAssignedTasks.findUnique({
      where: {
        taskId_userId: {
          taskId: userAssignedTasks.taskId,
          userId: userAssignedTasks.userId,
        },
      },
    }).task({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() userAssignedTasks: UserAssignedTasks, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).userAssignedTasks.findUnique({
      where: {
        taskId_userId: {
          taskId: userAssignedTasks.taskId,
          userId: userAssignedTasks.userId,
        },
      },
    }).user({});
  }
}
