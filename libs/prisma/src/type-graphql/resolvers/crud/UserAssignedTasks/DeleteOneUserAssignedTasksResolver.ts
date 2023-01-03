import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneUserAssignedTasksArgs } from "./args/DeleteOneUserAssignedTasksArgs";
import { UserAssignedTasks } from "../../../models/UserAssignedTasks";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserAssignedTasks)
export class DeleteOneUserAssignedTasksResolver {
  @TypeGraphQL.Mutation(_returns => UserAssignedTasks, {
    nullable: true
  })
  async deleteOneUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUserAssignedTasksArgs): Promise<UserAssignedTasks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
