import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Workspace } from "../../../models/Workspace";
import { CreateOneWorkspaceArgs } from "./args/CreateOneWorkspaceArgs";

@TypeGraphQL.Resolver(_of => Workspace)
export class CreateOneWorkspaceResolver {
  @TypeGraphQL.Mutation(_returns => Workspace, {
    nullable: false
  })
  async createOneWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneWorkspaceArgs): Promise<Workspace> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspace.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
