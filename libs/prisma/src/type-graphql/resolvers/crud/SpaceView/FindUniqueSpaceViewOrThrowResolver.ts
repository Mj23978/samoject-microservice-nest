import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { SpaceView } from "../../../models/SpaceView";
import { FindUniqueSpaceViewOrThrowArgs } from "./args/FindUniqueSpaceViewOrThrowArgs";

@TypeGraphQL.Resolver(_of => SpaceView)
export class FindUniqueSpaceViewOrThrowResolver {
  @TypeGraphQL.Query(_returns => SpaceView, {
    nullable: true
  })
  async getSpaceView(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSpaceViewOrThrowArgs): Promise<SpaceView | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spaceView.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
