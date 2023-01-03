import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueProjectSettingsOrThrowArgs } from "./args/FindUniqueProjectSettingsOrThrowArgs";
import { ProjectSettings } from "../../../models/ProjectSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectSettings)
export class FindUniqueProjectSettingsOrThrowResolver {
  @TypeGraphQL.Query(_returns => ProjectSettings, {
    nullable: true
  })
  async findUniqueProjectSettingsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProjectSettingsOrThrowArgs): Promise<ProjectSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectSettings.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
