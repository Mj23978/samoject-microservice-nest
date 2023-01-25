import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Space } from "../../../models/Space";
import { FindUniqueSpaceOrThrowArgs } from "./args/FindUniqueSpaceOrThrowArgs";

@TypeGraphQL.Resolver(_of => Space)
export class FindUniqueSpaceOrThrowResolver {
  @TypeGraphQL.Query(_returns => Space, {
    nullable: true
  })
  async getSpace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSpaceOrThrowArgs): Promise<Space | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).space.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
