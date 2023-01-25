import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Space } from "../../../models/Space";
import { CreateOneSpaceArgs } from "./args/CreateOneSpaceArgs";

@TypeGraphQL.Resolver(_of => Space)
export class CreateOneSpaceResolver {
  @TypeGraphQL.Mutation(_returns => Space, {
    nullable: false
  })
  async createOneSpace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSpaceArgs): Promise<Space> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).space.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
