import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneWorkspaceSettingsArgs } from "./args/DeleteOneWorkspaceSettingsArgs";
import { WorkspaceSettings } from "../../../models/WorkspaceSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WorkspaceSettings)
export class DeleteOneWorkspaceSettingsResolver {
  @TypeGraphQL.Mutation(_returns => WorkspaceSettings, {
    nullable: true
  })
  async deleteOneWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWorkspaceSettingsArgs): Promise<WorkspaceSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
