import * as TypeGraphQL from "type-graphql";
import { Chat } from "../../../models/Chat";
import { Project } from "../../../models/Project";
import { ProjectSettings } from "../../../models/ProjectSettings";
import { ProjectsOnUsers } from "../../../models/ProjectsOnUsers";
import { Space } from "../../../models/Space";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { Workspace } from "../../../models/Workspace";
import { ProjectSpacesArgs } from "./args/ProjectSpacesArgs";
import { ProjectTasksArgs } from "./args/ProjectTasksArgs";
import { ProjectUsersArgs } from "./args/ProjectUsersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class ProjectRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Chat, {
    nullable: true
  })
  async chat(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any): Promise<Chat | null> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).chat({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => ProjectSettings, {
    nullable: false
  })
  async settings(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any): Promise<ProjectSettings> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).settings({});
  }

  @TypeGraphQL.FieldResolver(_type => Workspace, {
    nullable: false
  })
  async workspace(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any): Promise<Workspace> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).workspace({});
  }

  @TypeGraphQL.FieldResolver(_type => [ProjectsOnUsers], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectUsersArgs): Promise<ProjectsOnUsers[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).users(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Space], {
    nullable: false
  })
  async spaces(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectSpacesArgs): Promise<Space[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).spaces(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: false
  })
  async tasks(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectTasksArgs): Promise<Task[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).tasks(args);
  }
}
