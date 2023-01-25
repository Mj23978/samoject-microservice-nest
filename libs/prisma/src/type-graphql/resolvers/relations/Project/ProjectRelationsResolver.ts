import { getPrismaFromContext } from "../../../helpers";
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

@TypeGraphQL.Resolver(_of => Project)
export class ProjectRelationsResolver {
  @FieldResolver(() => Chat, {
    nullable: true
  })
  async chat(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any): Promise<Chat | null> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).chat({});
  }

  @FieldResolver(() => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).owner({});
  }

  @FieldResolver(() => ProjectSettings, {
    nullable: false
  })
  async settings(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any): Promise<ProjectSettings> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).settings({});
  }

  @FieldResolver(() => Workspace, {
    nullable: false
  })
  async workspace(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any): Promise<Workspace> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).workspace({});
  }

  @FieldResolver(() => [ProjectsOnUsers], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectUsersArgs): Promise<ProjectsOnUsers[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).users(args);
  }

  @FieldResolver(() => [Space], {
    nullable: false
  })
  async spaces(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectSpacesArgs): Promise<Space[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).spaces(args);
  }

  @FieldResolver(() => [Task], {
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
