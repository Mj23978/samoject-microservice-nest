import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Space } from "../../../models/Space";
import { FindFirstSpaceOrThrowArgs } from "./args/FindFirstSpaceOrThrowArgs";

@TypeGraphQL.Resolver(_of => Space)
export class FindFirstSpaceOrThrowResolver {
  @TypeGraphQL.Query(_returns => Space, {
    nullable: true
  })
  async findFirstSpaceOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSpaceOrThrowArgs): Promise<Space | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).space.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
