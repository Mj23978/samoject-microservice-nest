import { getPrismaFromContext } from "../../../helpers";
import { Space } from "../../../models/Space";
import { SpaceSettings } from "../../../models/SpaceSettings";

@TypeGraphQL.Resolver(_of => SpaceSettings)
export class SpaceSettingsRelationsResolver {
  @FieldResolver(() => Space, {
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
