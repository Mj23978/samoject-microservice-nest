import * as TypeGraphQL from "type-graphql";
import { Chat } from "../../../models/Chat";
import { Message } from "../../../models/Message";
import { Project } from "../../../models/Project";
import { ProjectsOnUsers } from "../../../models/ProjectsOnUsers";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { UserAssignedTasks } from "../../../models/UserAssignedTasks";
import { Workspace } from "../../../models/Workspace";
import { UserAssignedTasksArgs } from "./args/UserAssignedTasksArgs";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserCreatedTasksArgs } from "./args/UserCreatedTasksArgs";
import { UserOwnedProjectsArgs } from "./args/UserOwnedProjectsArgs";
import { UserProjectsArgs } from "./args/UserProjectsArgs";
import { UserUser_AArgs } from "./args/UserUser_AArgs";
import { UserUser_BArgs } from "./args/UserUser_BArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Chat, {
    nullable: true
  })
  async chat(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Chat | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).chat({});
  }

  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCommentsArgs): Promise<Message[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Project], {
    nullable: false
  })
  async ownedProjects(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserOwnedProjectsArgs): Promise<Project[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).ownedProjects(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ProjectsOnUsers], {
    nullable: false
  })
  async projects(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserProjectsArgs): Promise<ProjectsOnUsers[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).projects(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: false
  })
  async createdTasks(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCreatedTasksArgs): Promise<Task[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).createdTasks(args);
  }

  @TypeGraphQL.FieldResolver(_type => [UserAssignedTasks], {
    nullable: false
  })
  async assignedTasks(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserAssignedTasksArgs): Promise<UserAssignedTasks[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).assignedTasks(args);
  }

  @TypeGraphQL.FieldResolver(_type => Workspace, {
    nullable: true
  })
  async workspaces(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Workspace | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).workspaces({});
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async User_B(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserUser_BArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).User_B(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async User_A(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserUser_AArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).User_A(args);
  }
}
