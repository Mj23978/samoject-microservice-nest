import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Chat } from "../../../models/Chat";
import { CreateOneChatArgs } from "./args/CreateOneChatArgs";

@TypeGraphQL.Resolver(_of => Chat)
export class CreateOneChatResolver {
  @TypeGraphQL.Mutation(_returns => Chat, {
    nullable: false
  })
  async createOneChat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneChatArgs): Promise<Chat> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chat.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
