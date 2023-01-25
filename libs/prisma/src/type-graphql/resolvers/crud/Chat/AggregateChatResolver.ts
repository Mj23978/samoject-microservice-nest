import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Chat } from "../../../models/Chat";
import { AggregateChat } from "../../outputs/AggregateChat";
import { AggregateChatArgs } from "./args/AggregateChatArgs";

@TypeGraphQL.Resolver(_of => Chat)
export class AggregateChatResolver {
  @TypeGraphQL.Query(_returns => AggregateChat, {
    nullable: false
  })
  async aggregateChat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateChatArgs): Promise<AggregateChat> {
    return getPrismaFromContext(ctx).chat.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
