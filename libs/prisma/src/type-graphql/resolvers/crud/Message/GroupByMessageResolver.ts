import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Message } from "../../../models/Message";
import { MessageGroupBy } from "../../outputs/MessageGroupBy";
import { GroupByMessageArgs } from "./args/GroupByMessageArgs";

@TypeGraphQL.Resolver(_of => Message)
export class GroupByMessageResolver {
  @TypeGraphQL.Query(_returns => [MessageGroupBy], {
    nullable: false
  })
  async groupByMessage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMessageArgs): Promise<MessageGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).message.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
