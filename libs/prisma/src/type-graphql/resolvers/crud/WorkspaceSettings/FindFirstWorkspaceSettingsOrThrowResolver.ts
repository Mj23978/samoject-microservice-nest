import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { WorkspaceSettings } from "../../../models/WorkspaceSettings";
import { FindFirstWorkspaceSettingsOrThrowArgs } from "./args/FindFirstWorkspaceSettingsOrThrowArgs";

@TypeGraphQL.Resolver(_of => WorkspaceSettings)
export class FindFirstWorkspaceSettingsOrThrowResolver {
  @TypeGraphQL.Query(_returns => WorkspaceSettings, {
    nullable: true
  })
  async findFirstWorkspaceSettingsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWorkspaceSettingsOrThrowArgs): Promise<WorkspaceSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
