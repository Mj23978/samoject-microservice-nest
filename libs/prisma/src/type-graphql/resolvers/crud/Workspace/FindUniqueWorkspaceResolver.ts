import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Workspace } from "../../../models/Workspace";
import { FindUniqueWorkspaceArgs } from "./args/FindUniqueWorkspaceArgs";

@TypeGraphQL.Resolver(_of => Workspace)
export class FindUniqueWorkspaceResolver {
  @TypeGraphQL.Query(_returns => Workspace, {
    nullable: true
  })
  async workspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWorkspaceArgs): Promise<Workspace | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspace.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
