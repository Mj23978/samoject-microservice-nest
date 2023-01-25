import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Chat } from "../../../models/Chat";
import { FindFirstChatArgs } from "./args/FindFirstChatArgs";

@TypeGraphQL.Resolver(_of => Chat)
export class FindFirstChatResolver {
  @TypeGraphQL.Query(_returns => Chat, {
    nullable: true
  })
  async findFirstChat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstChatArgs): Promise<Chat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chat.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
