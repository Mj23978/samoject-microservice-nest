import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Task } from "../../../models/Task";
import { AggregateTask } from "../../outputs/AggregateTask";
import { AggregateTaskArgs } from "./args/AggregateTaskArgs";

@TypeGraphQL.Resolver(_of => Task)
export class AggregateTaskResolver {
  @TypeGraphQL.Query(_returns => AggregateTask, {
    nullable: false
  })
  async aggregateTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTaskArgs): Promise<AggregateTask> {
    return getPrismaFromContext(ctx).task.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
