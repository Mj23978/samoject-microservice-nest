import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWorkspaceSettingsArgs } from "./args/AggregateWorkspaceSettingsArgs";
import { WorkspaceSettings } from "../../../models/WorkspaceSettings";
import { AggregateWorkspaceSettings } from "../../outputs/AggregateWorkspaceSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

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
