import * as TypeGraphQL from "type-graphql";
import { Space } from "../../../models/Space";
import { SpaceSettings } from "../../../models/SpaceSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SpaceSettings)
export class SpaceSettingsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Space, {
    nullable: true
  })
  async space(@TypeGraphQL.Root() spaceSettings: SpaceSettings, @TypeGraphQL.Ctx() ctx: any): Promise<Space | null> {
    return getPrismaFromContext(ctx).spaceSettings.findUnique({
      where: {
        id: spaceSettings.id,
      },
    }).space({});
  }
}
