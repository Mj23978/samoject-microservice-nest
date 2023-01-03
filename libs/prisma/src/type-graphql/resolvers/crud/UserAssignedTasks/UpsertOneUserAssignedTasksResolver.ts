import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneUserAssignedTasksArgs } from "./args/UpsertOneUserAssignedTasksArgs";
import { UserAssignedTasks } from "../../../models/UserAssignedTasks";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserAssignedTasks)
export class UpsertOneUserAssignedTasksResolver {
  @TypeGraphQL.Mutation(_returns => UserAssignedTasks, {
    nullable: false
  })
  async upsertOneUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUserAssignedTasksArgs): Promise<UserAssignedTasks> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
