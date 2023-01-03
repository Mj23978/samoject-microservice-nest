import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySpaceSettingsArgs } from "./args/GroupBySpaceSettingsArgs";
import { SpaceSettings } from "../../../models/SpaceSettings";
import { SpaceSettingsGroupBy } from "../../outputs/SpaceSettingsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

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
