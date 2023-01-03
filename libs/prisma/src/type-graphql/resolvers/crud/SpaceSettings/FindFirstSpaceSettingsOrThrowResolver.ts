import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSpaceSettingsOrThrowArgs } from "./args/FindFirstSpaceSettingsOrThrowArgs";
import { SpaceSettings } from "../../../models/SpaceSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SpaceSettings)
export class FindFirstSpaceSettingsOrThrowResolver {
  @TypeGraphQL.Query(_returns => SpaceSettings, {
    nullable: true
  })
  async findFirstSpaceSettingsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSpaceSettingsOrThrowArgs): Promise<SpaceSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spaceSettings.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
