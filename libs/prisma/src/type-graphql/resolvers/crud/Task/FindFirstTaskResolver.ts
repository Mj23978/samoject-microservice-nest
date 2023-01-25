import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Task } from "../../../models/Task";
import { FindFirstTaskArgs } from "./args/FindFirstTaskArgs";

@TypeGraphQL.Resolver(_of => Task)
export class FindFirstTaskResolver {
  @TypeGraphQL.Query(_returns => Task, {
    nullable: true
  })
  async findFirstTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTaskArgs): Promise<Task | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).task.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
