import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { WorkspaceSettings } from "../../../models/WorkspaceSettings";
import { UpdateOneWorkspaceSettingsArgs } from "./args/UpdateOneWorkspaceSettingsArgs";

@TypeGraphQL.Resolver(_of => WorkspaceSettings)
export class UpdateOneWorkspaceSettingsResolver {
  @TypeGraphQL.Mutation(_returns => WorkspaceSettings, {
    nullable: true
  })
  async updateOneWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWorkspaceSettingsArgs): Promise<WorkspaceSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
