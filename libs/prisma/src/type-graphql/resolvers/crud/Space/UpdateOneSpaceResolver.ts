import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Space } from "../../../models/Space";
import { UpdateOneSpaceArgs } from "./args/UpdateOneSpaceArgs";

@TypeGraphQL.Resolver(_of => Space)
export class UpdateOneSpaceResolver {
  @TypeGraphQL.Mutation(_returns => Space, {
    nullable: true
  })
  async updateOneSpace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSpaceArgs): Promise<Space | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).space.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
