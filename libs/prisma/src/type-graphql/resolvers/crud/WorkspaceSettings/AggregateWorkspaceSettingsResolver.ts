import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { WorkspaceSettings } from "../../../models/WorkspaceSettings";
import { AggregateWorkspaceSettings } from "../../outputs/AggregateWorkspaceSettings";
import { AggregateWorkspaceSettingsArgs } from "./args/AggregateWorkspaceSettingsArgs";

@TypeGraphQL.Resolver(_of => WorkspaceSettings)
export class AggregateWorkspaceSettingsResolver {
  @TypeGraphQL.Query(_returns => AggregateWorkspaceSettings, {
    nullable: false
  })
  async aggregateWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWorkspaceSettingsArgs): Promise<AggregateWorkspaceSettings> {
    return getPrismaFromContext(ctx).workspaceSettings.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
