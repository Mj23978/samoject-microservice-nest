import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyWorkspaceSettingsArgs } from "./args/FindManyWorkspaceSettingsArgs";
import { WorkspaceSettings } from "../../../models/WorkspaceSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WorkspaceSettings)
export class FindManyWorkspaceSettingsResolver {
  @TypeGraphQL.Query(_returns => [WorkspaceSettings], {
    nullable: false
  })
  async findManyWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyWorkspaceSettingsArgs): Promise<WorkspaceSettings[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
