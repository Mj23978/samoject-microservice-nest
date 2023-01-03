import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByProjectSettingsArgs } from "./args/GroupByProjectSettingsArgs";
import { ProjectSettings } from "../../../models/ProjectSettings";
import { ProjectSettingsGroupBy } from "../../outputs/ProjectSettingsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectSettings)
export class GroupByProjectSettingsResolver {
  @TypeGraphQL.Query(_returns => [ProjectSettingsGroupBy], {
    nullable: false
  })
  async groupByProjectSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProjectSettingsArgs): Promise<ProjectSettingsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectSettings.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
