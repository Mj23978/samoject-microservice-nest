import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneWorkspaceSettingsArgs } from "./args/UpsertOneWorkspaceSettingsArgs";
import { WorkspaceSettings } from "../../../models/WorkspaceSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WorkspaceSettings)
export class UpsertOneWorkspaceSettingsResolver {
  @TypeGraphQL.Mutation(_returns => WorkspaceSettings, {
    nullable: false
  })
  async upsertOneWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWorkspaceSettingsArgs): Promise<WorkspaceSettings> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
