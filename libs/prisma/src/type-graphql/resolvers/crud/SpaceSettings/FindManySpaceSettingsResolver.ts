import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { SpaceSettings } from "../../../models/SpaceSettings";
import { FindManySpaceSettingsArgs } from "./args/FindManySpaceSettingsArgs";

@TypeGraphQL.Resolver(_of => SpaceSettings)
export class FindManySpaceSettingsResolver {
  @TypeGraphQL.Query(_returns => [SpaceSettings], {
    nullable: false
  })
  async findManySpaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySpaceSettingsArgs): Promise<SpaceSettings[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spaceSettings.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
