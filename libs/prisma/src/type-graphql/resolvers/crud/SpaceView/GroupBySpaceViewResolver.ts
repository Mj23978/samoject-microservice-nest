import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySpaceViewArgs } from "./args/GroupBySpaceViewArgs";
import { SpaceView } from "../../../models/SpaceView";
import { SpaceViewGroupBy } from "../../outputs/SpaceViewGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SpaceView)
export class GroupBySpaceViewResolver {
  @TypeGraphQL.Query(_returns => [SpaceViewGroupBy], {
    nullable: false
  })
  async groupBySpaceView(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySpaceViewArgs): Promise<SpaceViewGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spaceView.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
