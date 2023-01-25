import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { SpaceSettings } from "../../../models/SpaceSettings";
import { SpaceSettingsGroupBy } from "../../outputs/SpaceSettingsGroupBy";
import { GroupBySpaceSettingsArgs } from "./args/GroupBySpaceSettingsArgs";

@TypeGraphQL.Resolver(_of => SpaceSettings)
export class GroupBySpaceSettingsResolver {
  @TypeGraphQL.Query(_returns => [SpaceSettingsGroupBy], {
    nullable: false
  })
  async groupBySpaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySpaceSettingsArgs): Promise<SpaceSettingsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spaceSettings.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
