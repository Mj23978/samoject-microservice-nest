import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Workspace } from "../../../models/Workspace";
import { FindUniqueWorkspaceOrThrowArgs } from "./args/FindUniqueWorkspaceOrThrowArgs";

@TypeGraphQL.Resolver(_of => Workspace)
export class FindUniqueWorkspaceOrThrowResolver {
  @TypeGraphQL.Query(_returns => Workspace, {
    nullable: true
  })
  async getWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWorkspaceOrThrowArgs): Promise<Workspace | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspace.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
