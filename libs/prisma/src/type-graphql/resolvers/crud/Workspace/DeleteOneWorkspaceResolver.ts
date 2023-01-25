import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Workspace } from "../../../models/Workspace";
import { DeleteOneWorkspaceArgs } from "./args/DeleteOneWorkspaceArgs";

@TypeGraphQL.Resolver(_of => Workspace)
export class DeleteOneWorkspaceResolver {
  @TypeGraphQL.Mutation(_returns => Workspace, {
    nullable: true
  })
  async deleteOneWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWorkspaceArgs): Promise<Workspace | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspace.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
