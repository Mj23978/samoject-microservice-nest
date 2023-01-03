import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSpaceSettingsArgs } from "./args/AggregateSpaceSettingsArgs";
import { SpaceSettings } from "../../../models/SpaceSettings";
import { AggregateSpaceSettings } from "../../outputs/AggregateSpaceSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SpaceSettings)
export class AggregateSpaceSettingsResolver {
  @TypeGraphQL.Query(_returns => AggregateSpaceSettings, {
    nullable: false
  })
  async aggregateSpaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSpaceSettingsArgs): Promise<AggregateSpaceSettings> {
    return getPrismaFromContext(ctx).spaceSettings.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
