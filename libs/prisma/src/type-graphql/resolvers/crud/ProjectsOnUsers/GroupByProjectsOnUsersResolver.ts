import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { ProjectsOnUsers } from "../../../models/ProjectsOnUsers";
import { ProjectsOnUsersGroupBy } from "../../outputs/ProjectsOnUsersGroupBy";
import { GroupByProjectsOnUsersArgs } from "./args/GroupByProjectsOnUsersArgs";

@TypeGraphQL.Resolver(_of => ProjectsOnUsers)
export class GroupByProjectsOnUsersResolver {
  @TypeGraphQL.Query(_returns => [ProjectsOnUsersGroupBy], {
    nullable: false
  })
  async groupByProjectsOnUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProjectsOnUsersArgs): Promise<ProjectsOnUsersGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectsOnUsers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
