import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Space } from "../../../models/Space";
import { AggregateSpace } from "../../outputs/AggregateSpace";
import { AggregateSpaceArgs } from "./args/AggregateSpaceArgs";

@TypeGraphQL.Resolver(_of => Space)
export class AggregateSpaceResolver {
  @TypeGraphQL.Query(_returns => AggregateSpace, {
    nullable: false
  })
  async aggregateSpace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSpaceArgs): Promise<AggregateSpace> {
    return getPrismaFromContext(ctx).space.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
