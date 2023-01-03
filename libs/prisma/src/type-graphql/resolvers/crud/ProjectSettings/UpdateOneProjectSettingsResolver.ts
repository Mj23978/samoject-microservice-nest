import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneProjectSettingsArgs } from "./args/UpdateOneProjectSettingsArgs";
import { ProjectSettings } from "../../../models/ProjectSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectSettings)
export class UpdateOneProjectSettingsResolver {
  @TypeGraphQL.Mutation(_returns => ProjectSettings, {
    nullable: true
  })
  async updateOneProjectSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneProjectSettingsArgs): Promise<ProjectSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectSettings.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
