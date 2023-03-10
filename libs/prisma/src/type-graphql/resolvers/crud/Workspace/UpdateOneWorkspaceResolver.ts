import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Workspace } from "../../../models/Workspace";
import { UpdateOneWorkspaceArgs } from "./args/UpdateOneWorkspaceArgs";

@TypeGraphQL.Resolver(_of => Workspace)
export class UpdateOneWorkspaceResolver {
  @TypeGraphQL.Mutation(_returns => Workspace, {
    nullable: true
  })
  async updateOneWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWorkspaceArgs): Promise<Workspace | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspace.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
