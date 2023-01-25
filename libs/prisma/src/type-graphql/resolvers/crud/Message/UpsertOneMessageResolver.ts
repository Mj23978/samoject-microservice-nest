import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Message } from "../../../models/Message";
import { UpsertOneMessageArgs } from "./args/UpsertOneMessageArgs";

@TypeGraphQL.Resolver(_of => Message)
export class UpsertOneMessageResolver {
  @TypeGraphQL.Mutation(_returns => Message, {
    nullable: false
  })
  async upsertOneMessage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMessageArgs): Promise<Message> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).message.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
