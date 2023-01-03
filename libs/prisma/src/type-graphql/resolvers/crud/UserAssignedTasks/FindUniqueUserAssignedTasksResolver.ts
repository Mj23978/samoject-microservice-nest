import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserAssignedTasksArgs } from "./args/FindUniqueUserAssignedTasksArgs";
import { UserAssignedTasks } from "../../../models/UserAssignedTasks";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserAssignedTasks)
export class FindUniqueUserAssignedTasksResolver {
  @TypeGraphQL.Query(_returns => UserAssignedTasks, {
    nullable: true
  })
  async findUniqueUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserAssignedTasksArgs): Promise<UserAssignedTasks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
