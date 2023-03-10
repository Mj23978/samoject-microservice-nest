import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Workspace } from "../../../models/Workspace";
import { FindFirstWorkspaceArgs } from "./args/FindFirstWorkspaceArgs";

@TypeGraphQL.Resolver(_of => Workspace)
export class FindFirstWorkspaceResolver {
  @TypeGraphQL.Query(_returns => Workspace, {
    nullable: true
  })
  async findFirstWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWorkspaceArgs): Promise<Workspace | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspace.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
