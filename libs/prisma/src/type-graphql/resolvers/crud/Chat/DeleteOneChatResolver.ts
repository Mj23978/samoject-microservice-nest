import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Chat } from "../../../models/Chat";
import { DeleteOneChatArgs } from "./args/DeleteOneChatArgs";

@TypeGraphQL.Resolver(_of => Chat)
export class DeleteOneChatResolver {
  @TypeGraphQL.Mutation(_returns => Chat, {
    nullable: true
  })
  async deleteOneChat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneChatArgs): Promise<Chat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chat.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
