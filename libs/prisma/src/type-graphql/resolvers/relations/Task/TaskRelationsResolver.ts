import { getPrismaFromContext } from "../../../helpers";
import { Chat } from "../../../models/Chat";
import { Project } from "../../../models/Project";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { UserAssignedTasks } from "../../../models/UserAssignedTasks";
import { TaskAssignesArgs } from "./args/TaskAssignesArgs";
import { TaskSubTasksArgs } from "./args/TaskSubTasksArgs";

@TypeGraphQL.Resolver(_of => Task)
export class TaskRelationsResolver {
  @FieldResolver(() => Chat, {
    nullable: true
  })
  async chat(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<Chat | null> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).chat({});
  }

  @FieldResolver(() => User, {
    nullable: true
  })
  async creator(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).creator({});
  }

  @FieldResolver(() => Task, {
    nullable: true
  })
  async parent(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<Task | null> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).parent({});
  }

  @FieldResolver(() => Project, {
    nullable: true
  })
  async project(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<Project | null> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).project({});
  }

  @FieldResolver(() => [Task], {
    nullable: false
  })
  async subTasks(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TaskSubTasksArgs): Promise<Task[]> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).subTasks(args);
  }

  @FieldResolver(() => [UserAssignedTasks], {
    nullable: false
  })
  async assignes(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TaskAssignesArgs): Promise<UserAssignedTasks[]> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).assignes(args);
  }
}
