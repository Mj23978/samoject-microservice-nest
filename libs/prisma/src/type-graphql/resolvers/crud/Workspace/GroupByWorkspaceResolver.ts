import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Workspace } from "../../../models/Workspace";
import { WorkspaceGroupBy } from "../../outputs/WorkspaceGroupBy";
import { GroupByWorkspaceArgs } from "./args/GroupByWorkspaceArgs";

@TypeGraphQL.Resolver(_of => Workspace)
export class GroupByWorkspaceResolver {
  @TypeGraphQL.Query(_returns => [WorkspaceGroupBy], {
    nullable: false
  })
  async groupByWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWorkspaceArgs): Promise<WorkspaceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspace.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
