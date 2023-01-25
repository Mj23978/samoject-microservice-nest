import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Task } from "../../../models/Task";
import { FindFirstTaskOrThrowArgs } from "./args/FindFirstTaskOrThrowArgs";

@TypeGraphQL.Resolver(_of => Task)
export class FindFirstTaskOrThrowResolver {
  @TypeGraphQL.Query(_returns => Task, {
    nullable: true
  })
  async findFirstTaskOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTaskOrThrowArgs): Promise<Task | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).task.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
