import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { ProjectsOnUsers } from "../../../models/ProjectsOnUsers";
import { FindFirstProjectsOnUsersArgs } from "./args/FindFirstProjectsOnUsersArgs";

@TypeGraphQL.Resolver(_of => ProjectsOnUsers)
export class FindFirstProjectsOnUsersResolver {
  @TypeGraphQL.Query(_returns => ProjectsOnUsers, {
    nullable: true
  })
  async findFirstProjectsOnUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProjectsOnUsersArgs): Promise<ProjectsOnUsers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectsOnUsers.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
