import { getPrismaFromContext } from "../../../helpers";
import { Workspace } from "../../../models/Workspace";
import { WorkspaceSettings } from "../../../models/WorkspaceSettings";

@TypeGraphQL.Resolver(_of => WorkspaceSettings)
export class WorkspaceSettingsRelationsResolver {
  @FieldResolver(() => Workspace, {
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
