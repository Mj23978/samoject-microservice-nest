import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Space } from "../../../models/Space";
import { SpaceGroupBy } from "../../outputs/SpaceGroupBy";
import { GroupBySpaceArgs } from "./args/GroupBySpaceArgs";

@TypeGraphQL.Resolver(_of => Space)
export class GroupBySpaceResolver {
  @TypeGraphQL.Query(_returns => [SpaceGroupBy], {
    nullable: false
  })
  async groupBySpace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySpaceArgs): Promise<SpaceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).space.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
