import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Workspace } from "../../../models/Workspace";
import { UpsertOneWorkspaceArgs } from "./args/UpsertOneWorkspaceArgs";

@TypeGraphQL.Resolver(_of => Workspace)
export class UpsertOneWorkspaceResolver {
  @TypeGraphQL.Mutation(_returns => Workspace, {
    nullable: false
  })
  async upsertOneWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWorkspaceArgs): Promise<Workspace> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspace.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
