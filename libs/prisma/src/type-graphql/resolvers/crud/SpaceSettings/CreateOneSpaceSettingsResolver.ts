import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSpaceSettingsArgs } from "./args/CreateOneSpaceSettingsArgs";
import { SpaceSettings } from "../../../models/SpaceSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SpaceSettings)
export class CreateOneSpaceSettingsResolver {
  @TypeGraphQL.Mutation(_returns => SpaceSettings, {
    nullable: false
  })
  async createOneSpaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSpaceSettingsArgs): Promise<SpaceSettings> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spaceSettings.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
