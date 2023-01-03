import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstProjectsOnUsersOrThrowArgs } from "./args/FindFirstProjectsOnUsersOrThrowArgs";
import { ProjectsOnUsers } from "../../../models/ProjectsOnUsers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectsOnUsers)
export class FindFirstProjectsOnUsersOrThrowResolver {
  @TypeGraphQL.Query(_returns => ProjectsOnUsers, {
    nullable: true
  })
  async findFirstProjectsOnUsersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProjectsOnUsersOrThrowArgs): Promise<ProjectsOnUsers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectsOnUsers.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
