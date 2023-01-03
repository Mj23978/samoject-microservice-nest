import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneProjectsOnUsersArgs } from "./args/CreateOneProjectsOnUsersArgs";
import { ProjectsOnUsers } from "../../../models/ProjectsOnUsers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

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
