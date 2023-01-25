import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Message } from "../../../models/Message";
import { FindUniqueMessageOrThrowArgs } from "./args/FindUniqueMessageOrThrowArgs";

@TypeGraphQL.Resolver(_of => Message)
export class FindUniqueMessageOrThrowResolver {
  @TypeGraphQL.Query(_returns => Message, {
    nullable: true
  })
  async getMessage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMessageOrThrowArgs): Promise<Message | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).message.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
