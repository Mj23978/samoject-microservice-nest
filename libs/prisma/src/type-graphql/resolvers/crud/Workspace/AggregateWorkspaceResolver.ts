import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Workspace } from "../../../models/Workspace";
import { AggregateWorkspace } from "../../outputs/AggregateWorkspace";
import { AggregateWorkspaceArgs } from "./args/AggregateWorkspaceArgs";

@TypeGraphQL.Resolver(_of => Workspace)
export class AggregateWorkspaceResolver {
  @TypeGraphQL.Query(_returns => AggregateWorkspace, {
    nullable: false
  })
  async aggregateWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWorkspaceArgs): Promise<AggregateWorkspace> {
    return getPrismaFromContext(ctx).workspace.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
