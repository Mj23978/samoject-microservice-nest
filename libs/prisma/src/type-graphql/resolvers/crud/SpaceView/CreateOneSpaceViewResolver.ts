import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSpaceViewArgs } from "./args/CreateOneSpaceViewArgs";
import { SpaceView } from "../../../models/SpaceView";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SpaceView)
export class CreateOneSpaceViewResolver {
  @TypeGraphQL.Mutation(_returns => SpaceView, {
    nullable: false
  })
  async createOneSpaceView(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSpaceViewArgs): Promise<SpaceView> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).spaceView.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
