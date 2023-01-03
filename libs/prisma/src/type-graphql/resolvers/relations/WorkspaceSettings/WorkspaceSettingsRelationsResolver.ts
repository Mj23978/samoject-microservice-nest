import * as TypeGraphQL from "type-graphql";
import { Workspace } from "../../../models/Workspace";
import { WorkspaceSettings } from "../../../models/WorkspaceSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WorkspaceSettings)
export class WorkspaceSettingsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Workspace, {
    nullable: true
  })
  async workspace(@TypeGraphQL.Root() workspaceSettings: WorkspaceSettings, @TypeGraphQL.Ctx() ctx: any): Promise<Workspace | null> {
    return getPrismaFromContext(ctx).workspaceSettings.findUnique({
      where: {
        id: workspaceSettings.id,
      },
    }).workspace({});
  }
}
