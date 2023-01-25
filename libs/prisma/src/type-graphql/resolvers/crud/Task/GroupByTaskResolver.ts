import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Task } from "../../../models/Task";
import { TaskGroupBy } from "../../outputs/TaskGroupBy";
import { GroupByTaskArgs } from "./args/GroupByTaskArgs";

@TypeGraphQL.Resolver(_of => Task)
export class GroupByTaskResolver {
  @TypeGraphQL.Query(_returns => [TaskGroupBy], {
    nullable: false
  })
  async groupByTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTaskArgs): Promise<TaskGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).task.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
