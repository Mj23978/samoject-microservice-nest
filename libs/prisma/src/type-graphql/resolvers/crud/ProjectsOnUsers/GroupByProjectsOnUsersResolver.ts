import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByProjectsOnUsersArgs } from "./args/GroupByProjectsOnUsersArgs";
import { ProjectsOnUsers } from "../../../models/ProjectsOnUsers";
import { ProjectsOnUsersGroupBy } from "../../outputs/ProjectsOnUsersGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

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
