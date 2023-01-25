import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { WorkspaceSettings } from "../../../models/WorkspaceSettings";
import { WorkspaceSettingsGroupBy } from "../../outputs/WorkspaceSettingsGroupBy";
import { GroupByWorkspaceSettingsArgs } from "./args/GroupByWorkspaceSettingsArgs";

@TypeGraphQL.Resolver(_of => WorkspaceSettings)
export class GroupByWorkspaceSettingsResolver {
  @TypeGraphQL.Query(_returns => [WorkspaceSettingsGroupBy], {
    nullable: false
  })
  async groupByWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWorkspaceSettingsArgs): Promise<WorkspaceSettingsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
