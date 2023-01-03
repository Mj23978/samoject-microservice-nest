import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSpaceSettingsArgs } from "./args/UpsertOneSpaceSettingsArgs";
import { SpaceSettings } from "../../../models/SpaceSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

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
