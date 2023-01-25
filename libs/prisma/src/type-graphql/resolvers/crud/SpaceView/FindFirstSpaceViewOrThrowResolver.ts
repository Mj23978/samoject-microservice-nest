import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { SpaceView } from "../../../models/SpaceView";
import { FindFirstSpaceViewOrThrowArgs } from "./args/FindFirstSpaceViewOrThrowArgs";

@TypeGraphQL.Resolver(_of => SpaceView)
export class FindFirstSpaceViewOrThrowResolver {
  @TypeGraphQL.Query(_returns => SpaceView, {
    nullable: true
  })
  async findFirstSpaceViewOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSpaceViewOrThrowArgs): Promise<SpaceView | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spaceView.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
