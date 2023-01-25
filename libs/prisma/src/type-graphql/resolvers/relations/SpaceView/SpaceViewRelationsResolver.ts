import { getPrismaFromContext } from "../../../helpers";
import { Space } from "../../../models/Space";
import { SpaceView } from "../../../models/SpaceView";

@TypeGraphQL.Resolver(_of => SpaceView)
export class SpaceViewRelationsResolver {
  @FieldResolver(() => Space, {
    nullable: true
  })
  async space(@TypeGraphQL.Root() spaceView: SpaceView, @TypeGraphQL.Ctx() ctx: any): Promise<Space | null> {
    return getPrismaFromContext(ctx).spaceView.findUnique({
      where: {
        id: spaceView.id,
      },
    }).space({});
  }
}
