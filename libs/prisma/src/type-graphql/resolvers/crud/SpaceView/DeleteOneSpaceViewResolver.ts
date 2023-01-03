import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneSpaceViewArgs } from "./args/DeleteOneSpaceViewArgs";
import { SpaceView } from "../../../models/SpaceView";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SpaceView)
export class DeleteOneSpaceViewResolver {
  @TypeGraphQL.Mutation(_returns => SpaceView, {
    nullable: true
  })
  async deleteOneSpaceView(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSpaceViewArgs): Promise<SpaceView | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spaceView.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
