import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Chat } from "../../../models/Chat";
import { FindFirstChatOrThrowArgs } from "./args/FindFirstChatOrThrowArgs";

@TypeGraphQL.Resolver(_of => Chat)
export class FindFirstChatOrThrowResolver {
  @TypeGraphQL.Query(_returns => Chat, {
    nullable: true
  })
  async findFirstChatOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstChatOrThrowArgs): Promise<Chat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chat.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
