import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { User } from "../../../models/User";
import { UpsertOneUserArgs } from "./args/UpsertOneUserArgs";

@TypeGraphQL.Resolver(_of => User)
export class UpsertOneUserResolver {
  @TypeGraphQL.Mutation(_returns => User, {
    nullable: false
  })
  async upsertOneUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUserArgs): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
