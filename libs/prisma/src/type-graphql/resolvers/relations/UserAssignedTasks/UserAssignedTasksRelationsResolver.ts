import { getPrismaFromContext } from "../../../helpers";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { UserAssignedTasks } from "../../../models/UserAssignedTasks";

@TypeGraphQL.Resolver(_of => UserAssignedTasks)
export class UserAssignedTasksRelationsResolver {
  @FieldResolver(() => Task, {
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

  @FieldResolver(() => User, {
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
