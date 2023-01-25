import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Task } from "../../../models/Task";
import { DeleteOneTaskArgs } from "./args/DeleteOneTaskArgs";

@TypeGraphQL.Resolver(_of => Task)
export class DeleteOneTaskResolver {
  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: true
  })
  async deleteOneTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTaskArgs): Promise<Task | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).task.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
