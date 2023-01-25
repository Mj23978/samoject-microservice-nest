import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { UserAssignedTasks } from "../../../models/UserAssignedTasks";
import { CreateOneUserAssignedTasksArgs } from "./args/CreateOneUserAssignedTasksArgs";

@TypeGraphQL.Resolver(_of => UserAssignedTasks)
export class CreateOneUserAssignedTasksResolver {
  @TypeGraphQL.Mutation(_returns => UserAssignedTasks, {
    nullable: false
  })
  async createOneUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserAssignedTasksArgs): Promise<UserAssignedTasks> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
