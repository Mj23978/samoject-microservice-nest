import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Message } from "../../../models/Message";
import { AggregateMessage } from "../../outputs/AggregateMessage";
import { AggregateMessageArgs } from "./args/AggregateMessageArgs";

@TypeGraphQL.Resolver(_of => Message)
export class AggregateMessageResolver {
  @TypeGraphQL.Query(_returns => AggregateMessage, {
    nullable: false
  })
  async aggregateMessage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMessageArgs): Promise<AggregateMessage> {
    return getPrismaFromContext(ctx).message.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
