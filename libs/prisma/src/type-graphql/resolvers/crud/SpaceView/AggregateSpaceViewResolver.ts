import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSpaceViewArgs } from "./args/AggregateSpaceViewArgs";
import { SpaceView } from "../../../models/SpaceView";
import { AggregateSpaceView } from "../../outputs/AggregateSpaceView";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SpaceView)
export class AggregateSpaceViewResolver {
  @TypeGraphQL.Query(_returns => AggregateSpaceView, {
    nullable: false
  })
  async aggregateSpaceView(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSpaceViewArgs): Promise<AggregateSpaceView> {
    return getPrismaFromContext(ctx).spaceView.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
