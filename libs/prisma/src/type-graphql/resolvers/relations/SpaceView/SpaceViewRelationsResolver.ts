import * as TypeGraphQL from "type-graphql";
import { Space } from "../../../models/Space";
import { SpaceView } from "../../../models/SpaceView";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SpaceView)
export class SpaceViewRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Space, {
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
