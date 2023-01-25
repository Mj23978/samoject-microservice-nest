import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { SpaceView } from "../../../models/SpaceView";
import { FindManySpaceViewArgs } from "./args/FindManySpaceViewArgs";

@TypeGraphQL.Resolver(_of => SpaceView)
export class FindManySpaceViewResolver {
  @TypeGraphQL.Query(_returns => [SpaceView], {
    nullable: false
  })
  async spaceViews(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySpaceViewArgs): Promise<SpaceView[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spaceView.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
