import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Space } from "../../../models/Space";
import { UpsertOneSpaceArgs } from "./args/UpsertOneSpaceArgs";

@TypeGraphQL.Resolver(_of => Space)
export class UpsertOneSpaceResolver {
  @TypeGraphQL.Mutation(_returns => Space, {
    nullable: false
  })
  async upsertOneSpace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSpaceArgs): Promise<Space> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).space.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
