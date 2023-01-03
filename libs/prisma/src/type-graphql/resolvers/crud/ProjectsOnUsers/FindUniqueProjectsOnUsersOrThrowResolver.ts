import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueProjectsOnUsersOrThrowArgs } from "./args/FindUniqueProjectsOnUsersOrThrowArgs";
import { ProjectsOnUsers } from "../../../models/ProjectsOnUsers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectsOnUsers)
export class FindUniqueProjectsOnUsersOrThrowResolver {
  @TypeGraphQL.Query(_returns => ProjectsOnUsers, {
    nullable: true
  })
  async findUniqueProjectsOnUsersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProjectsOnUsersOrThrowArgs): Promise<ProjectsOnUsers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectsOnUsers.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
