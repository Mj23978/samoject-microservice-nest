import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { UserAssignedTasks } from "../../../models/UserAssignedTasks";
import { FindUniqueUserAssignedTasksOrThrowArgs } from "./args/FindUniqueUserAssignedTasksOrThrowArgs";

@TypeGraphQL.Resolver(_of => UserAssignedTasks)
export class FindUniqueUserAssignedTasksOrThrowResolver {
  @TypeGraphQL.Query(_returns => UserAssignedTasks, {
    nullable: true
  })
  async findUniqueUserAssignedTasksOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserAssignedTasksOrThrowArgs): Promise<UserAssignedTasks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
