import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserAssignedTasksArgs } from "./args/AggregateUserAssignedTasksArgs";
import { UserAssignedTasks } from "../../../models/UserAssignedTasks";
import { AggregateUserAssignedTasks } from "../../outputs/AggregateUserAssignedTasks";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

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
