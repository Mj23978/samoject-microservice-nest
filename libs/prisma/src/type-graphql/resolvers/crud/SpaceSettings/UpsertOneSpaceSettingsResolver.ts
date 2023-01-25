import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { SpaceSettings } from "../../../models/SpaceSettings";
import { UpsertOneSpaceSettingsArgs } from "./args/UpsertOneSpaceSettingsArgs";

@TypeGraphQL.Resolver(_of => SpaceSettings)
export class UpsertOneSpaceSettingsResolver {
  @TypeGraphQL.Mutation(_returns => SpaceSettings, {
    nullable: false
  })
  async upsertOneSpaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSpaceSettingsArgs): Promise<SpaceSettings> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spaceSettings.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
