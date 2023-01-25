import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { UserAssignedTasks } from "../../../models/UserAssignedTasks";
import { AggregateUserAssignedTasks } from "../../outputs/AggregateUserAssignedTasks";
import { AggregateUserAssignedTasksArgs } from "./args/AggregateUserAssignedTasksArgs";

@TypeGraphQL.Resolver(_of => UserAssignedTasks)
export class AggregateUserAssignedTasksResolver {
  @TypeGraphQL.Query(_returns => AggregateUserAssignedTasks, {
    nullable: false
  })
  async aggregateUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserAssignedTasksArgs): Promise<AggregateUserAssignedTasks> {
    return getPrismaFromContext(ctx).userAssignedTasks.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
