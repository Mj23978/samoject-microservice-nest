import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Workspace } from "../../../models/Workspace";
import { FindManyWorkspaceArgs } from "./args/FindManyWorkspaceArgs";

@TypeGraphQL.Resolver(_of => Workspace)
export class FindManyWorkspaceResolver {
  @TypeGraphQL.Query(_returns => [Workspace], {
    nullable: false
  })
  async workspaces(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyWorkspaceArgs): Promise<Workspace[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspace.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
