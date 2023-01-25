import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { ProjectSettings } from "../../../models/ProjectSettings";
import { FindManyProjectSettingsArgs } from "./args/FindManyProjectSettingsArgs";

@TypeGraphQL.Resolver(_of => ProjectSettings)
export class FindManyProjectSettingsResolver {
  @TypeGraphQL.Query(_returns => [ProjectSettings], {
    nullable: false
  })
  async findManyProjectSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyProjectSettingsArgs): Promise<ProjectSettings[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectSettings.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
