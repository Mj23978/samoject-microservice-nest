import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSpaceSettingsArgs } from "./args/FindFirstSpaceSettingsArgs";
import { SpaceSettings } from "../../../models/SpaceSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SpaceSettings)
export class FindFirstSpaceSettingsResolver {
  @TypeGraphQL.Query(_returns => SpaceSettings, {
    nullable: true
  })
  async findFirstSpaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSpaceSettingsArgs): Promise<SpaceSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spaceSettings.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
