import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Project } from "../../../models/Project";
import { ProjectGroupBy } from "../../outputs/ProjectGroupBy";
import { GroupByProjectArgs } from "./args/GroupByProjectArgs";

@TypeGraphQL.Resolver(_of => Project)
export class GroupByProjectResolver {
  @TypeGraphQL.Query(_returns => [ProjectGroupBy], {
    nullable: false
  })
  async groupByProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProjectArgs): Promise<ProjectGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).project.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
