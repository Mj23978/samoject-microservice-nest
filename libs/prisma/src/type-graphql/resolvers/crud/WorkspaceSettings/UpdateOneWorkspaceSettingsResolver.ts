import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneWorkspaceSettingsArgs } from "./args/UpdateOneWorkspaceSettingsArgs";
import { WorkspaceSettings } from "../../../models/WorkspaceSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

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
