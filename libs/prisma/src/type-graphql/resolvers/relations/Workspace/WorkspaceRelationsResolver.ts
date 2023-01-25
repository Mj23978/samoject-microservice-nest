import { getPrismaFromContext } from "../../../helpers";
import { Project } from "../../../models/Project";
import { User } from "../../../models/User";
import { Workspace } from "../../../models/Workspace";
import { WorkspaceSettings } from "../../../models/WorkspaceSettings";
import { WorkspaceProjectsArgs } from "./args/WorkspaceProjectsArgs";

@TypeGraphQL.Resolver(_of => Workspace)
export class WorkspaceRelationsResolver {
  @FieldResolver(() => WorkspaceSettings, {
    nullable: false
  })
  async settings(@TypeGraphQL.Root() workspace: Workspace, @TypeGraphQL.Ctx() ctx: any): Promise<WorkspaceSettings> {
    return getPrismaFromContext(ctx).workspace.findUnique({
      where: {
        id: workspace.id,
      },
    }).settings({});
  }

  @FieldResolver(() => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() workspace: Workspace, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).workspace.findUnique({
      where: {
        id: workspace.id,
      },
    }).user({});
  }

  @FieldResolver(() => [Project], {
    nullable: false
  })
  async projects(@TypeGraphQL.Root() workspace: Workspace, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: WorkspaceProjectsArgs): Promise<Project[]> {
    return getPrismaFromContext(ctx).workspace.findUnique({
      where: {
        id: workspace.id,
      },
    }).projects(args);
  }
}
