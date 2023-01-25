import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { ProjectsOnUsers } from "../../../models/ProjectsOnUsers";
import { CreateOneProjectsOnUsersArgs } from "./args/CreateOneProjectsOnUsersArgs";

@TypeGraphQL.Resolver(_of => ProjectsOnUsers)
export class CreateOneProjectsOnUsersResolver {
  @TypeGraphQL.Mutation(_returns => ProjectsOnUsers, {
    nullable: false
  })
  async createOneProjectsOnUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneProjectsOnUsersArgs): Promise<ProjectsOnUsers> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectsOnUsers.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
