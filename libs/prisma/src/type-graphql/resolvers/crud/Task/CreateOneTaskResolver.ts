import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Task } from "../../../models/Task";
import { CreateOneTaskArgs } from "./args/CreateOneTaskArgs";

@TypeGraphQL.Resolver(_of => Task)
export class CreateOneTaskResolver {
  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: false
  })
  async createOneTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTaskArgs): Promise<Task> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).task.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
