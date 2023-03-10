import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Task } from "../../../models/Task";
import { FindUniqueTaskOrThrowArgs } from "./args/FindUniqueTaskOrThrowArgs";

@TypeGraphQL.Resolver(_of => Task)
export class FindUniqueTaskOrThrowResolver {
  @TypeGraphQL.Query(_returns => Task, {
    nullable: true
  })
  async getTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTaskOrThrowArgs): Promise<Task | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).task.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
