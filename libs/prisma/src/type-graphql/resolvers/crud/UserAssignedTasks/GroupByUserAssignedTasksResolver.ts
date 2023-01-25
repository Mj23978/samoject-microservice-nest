import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { UserAssignedTasks } from "../../../models/UserAssignedTasks";
import { UserAssignedTasksGroupBy } from "../../outputs/UserAssignedTasksGroupBy";
import { GroupByUserAssignedTasksArgs } from "./args/GroupByUserAssignedTasksArgs";

@TypeGraphQL.Resolver(_of => UserAssignedTasks)
export class GroupByUserAssignedTasksResolver {
  @TypeGraphQL.Query(_returns => [UserAssignedTasksGroupBy], {
    nullable: false
  })
  async groupByUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserAssignedTasksArgs): Promise<UserAssignedTasksGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
