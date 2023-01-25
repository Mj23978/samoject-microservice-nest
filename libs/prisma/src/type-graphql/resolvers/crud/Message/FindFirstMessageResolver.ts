import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Message } from "../../../models/Message";
import { FindFirstMessageArgs } from "./args/FindFirstMessageArgs";

@TypeGraphQL.Resolver(_of => Message)
export class FindFirstMessageResolver {
  @TypeGraphQL.Query(_returns => Message, {
    nullable: true
  })
  async findFirstMessage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMessageArgs): Promise<Message | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).message.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
