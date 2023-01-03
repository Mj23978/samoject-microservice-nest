import * as TypeGraphQL from "type-graphql";
import { Project } from "../../../models/Project";
import { ProjectsOnUsers } from "../../../models/ProjectsOnUsers";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectsOnUsers)
export class ProjectsOnUsersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Project, {
    nullable: false
  })
  async project(@TypeGraphQL.Root() projectsOnUsers: ProjectsOnUsers, @TypeGraphQL.Ctx() ctx: any): Promise<Project> {
    return getPrismaFromContext(ctx).projectsOnUsers.findUnique({
      where: {
        projectId_userId: {
          projectId: projectsOnUsers.projectId,
          userId: projectsOnUsers.userId,
        },
      },
    }).project({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() projectsOnUsers: ProjectsOnUsers, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).projectsOnUsers.findUnique({
      where: {
        projectId_userId: {
          projectId: projectsOnUsers.projectId,
          userId: projectsOnUsers.userId,
        },
      },
    }).user({});
  }
}
