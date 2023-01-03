import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSpaceArgs } from "./args/AggregateSpaceArgs";
import { Space } from "../../../models/Space";
import { AggregateSpace } from "../../outputs/AggregateSpace";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

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
