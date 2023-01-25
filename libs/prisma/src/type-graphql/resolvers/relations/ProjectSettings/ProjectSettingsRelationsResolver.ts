import { getPrismaFromContext } from "../../../helpers";
import { Project } from "../../../models/Project";
import { ProjectSettings } from "../../../models/ProjectSettings";

@TypeGraphQL.Resolver(_of => ProjectSettings)
export class ProjectSettingsRelationsResolver {
  @FieldResolver(() => Project, {
    nullable: true
  })
  async project(@TypeGraphQL.Root() projectSettings: ProjectSettings, @TypeGraphQL.Ctx() ctx: any): Promise<Project | null> {
    return getPrismaFromContext(ctx).projectSettings.findUnique({
      where: {
        id: projectSettings.id,
      },
    }).project({});
  }
}
