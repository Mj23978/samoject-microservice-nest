import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { ProjectSettings } from "../../../models/ProjectSettings";
import { DeleteOneProjectSettingsArgs } from "./args/DeleteOneProjectSettingsArgs";

@TypeGraphQL.Resolver(_of => ProjectSettings)
export class DeleteOneProjectSettingsResolver {
  @TypeGraphQL.Mutation(_returns => ProjectSettings, {
    nullable: true
  })
  async deleteOneProjectSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneProjectSettingsArgs): Promise<ProjectSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectSettings.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
