import * as TypeGraphQL from "type-graphql";
import { Project } from "../../../models/Project";
import { ProjectSettings } from "../../../models/ProjectSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectSettings)
export class ProjectSettingsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Project, {
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
