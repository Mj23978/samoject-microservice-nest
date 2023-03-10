import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Workspace } from "../../../models/Workspace";
import { FindFirstWorkspaceOrThrowArgs } from "./args/FindFirstWorkspaceOrThrowArgs";

@TypeGraphQL.Resolver(_of => Workspace)
export class FindFirstWorkspaceOrThrowResolver {
  @TypeGraphQL.Query(_returns => Workspace, {
    nullable: true
  })
  async findFirstWorkspaceOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWorkspaceOrThrowArgs): Promise<Workspace | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspace.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
