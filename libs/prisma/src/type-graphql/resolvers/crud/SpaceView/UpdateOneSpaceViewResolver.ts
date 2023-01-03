import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSpaceViewArgs } from "./args/UpdateOneSpaceViewArgs";
import { SpaceView } from "../../../models/SpaceView";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SpaceView)
export class UpdateOneSpaceViewResolver {
  @TypeGraphQL.Mutation(_returns => SpaceView, {
    nullable: true
  })
  async updateOneSpaceView(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSpaceViewArgs): Promise<SpaceView | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spaceView.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
