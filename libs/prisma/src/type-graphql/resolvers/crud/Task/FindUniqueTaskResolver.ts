import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Task } from "../../../models/Task";
import { FindUniqueTaskArgs } from "./args/FindUniqueTaskArgs";

@TypeGraphQL.Resolver(_of => Task)
export class FindUniqueTaskResolver {
  @TypeGraphQL.Query(_returns => Task, {
    nullable: true
  })
  async task(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTaskArgs): Promise<Task | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).task.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
