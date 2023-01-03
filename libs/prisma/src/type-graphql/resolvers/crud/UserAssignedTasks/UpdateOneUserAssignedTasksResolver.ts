import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneUserAssignedTasksArgs } from "./args/UpdateOneUserAssignedTasksArgs";
import { UserAssignedTasks } from "../../../models/UserAssignedTasks";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserAssignedTasks)
export class UpdateOneUserAssignedTasksResolver {
  @TypeGraphQL.Mutation(_returns => UserAssignedTasks, {
    nullable: true
  })
  async updateOneUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUserAssignedTasksArgs): Promise<UserAssignedTasks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
