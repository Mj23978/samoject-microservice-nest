import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { ProjectSettings } from "../../../models/ProjectSettings";
import { FindFirstProjectSettingsOrThrowArgs } from "./args/FindFirstProjectSettingsOrThrowArgs";

@TypeGraphQL.Resolver(_of => ProjectSettings)
export class FindFirstProjectSettingsOrThrowResolver {
  @TypeGraphQL.Query(_returns => ProjectSettings, {
    nullable: true
  })
  async findFirstProjectSettingsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProjectSettingsOrThrowArgs): Promise<ProjectSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectSettings.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
