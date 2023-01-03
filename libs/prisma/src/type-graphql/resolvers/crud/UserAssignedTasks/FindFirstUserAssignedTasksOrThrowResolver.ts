import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserAssignedTasksOrThrowArgs } from "./args/FindFirstUserAssignedTasksOrThrowArgs";
import { UserAssignedTasks } from "../../../models/UserAssignedTasks";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserAssignedTasks)
export class FindFirstUserAssignedTasksOrThrowResolver {
  @TypeGraphQL.Query(_returns => UserAssignedTasks, {
    nullable: true
  })
  async findFirstUserAssignedTasksOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserAssignedTasksOrThrowArgs): Promise<UserAssignedTasks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
