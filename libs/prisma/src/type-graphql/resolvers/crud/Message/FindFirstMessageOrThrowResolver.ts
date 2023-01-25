import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Message } from "../../../models/Message";
import { FindFirstMessageOrThrowArgs } from "./args/FindFirstMessageOrThrowArgs";

@TypeGraphQL.Resolver(_of => Message)
export class FindFirstMessageOrThrowResolver {
  @TypeGraphQL.Query(_returns => Message, {
    nullable: true
  })
  async findFirstMessageOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMessageOrThrowArgs): Promise<Message | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).message.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
