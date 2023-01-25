import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { UserAssignedTasks } from "../../../models/UserAssignedTasks";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyUserAssignedTasksArgs } from "./args/CreateManyUserAssignedTasksArgs";

@TypeGraphQL.Resolver(_of => UserAssignedTasks)
export class CreateManyUserAssignedTasksResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUserAssignedTasksArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
