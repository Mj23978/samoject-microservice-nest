import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Message } from "../../../models/Message";
import { DeleteOneMessageArgs } from "./args/DeleteOneMessageArgs";

@TypeGraphQL.Resolver(_of => Message)
export class DeleteOneMessageResolver {
  @TypeGraphQL.Mutation(_returns => Message, {
    nullable: true
  })
  async deleteOneMessage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMessageArgs): Promise<Message | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).message.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
