import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Chat } from "../../../models/Chat";
import { FindUniqueChatOrThrowArgs } from "./args/FindUniqueChatOrThrowArgs";

@TypeGraphQL.Resolver(_of => Chat)
export class FindUniqueChatOrThrowResolver {
  @TypeGraphQL.Query(_returns => Chat, {
    nullable: true
  })
  async getChat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueChatOrThrowArgs): Promise<Chat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chat.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
