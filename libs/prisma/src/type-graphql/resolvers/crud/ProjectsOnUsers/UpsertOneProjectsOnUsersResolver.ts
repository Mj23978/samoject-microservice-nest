import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneProjectsOnUsersArgs } from "./args/UpsertOneProjectsOnUsersArgs";
import { ProjectsOnUsers } from "../../../models/ProjectsOnUsers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectsOnUsers)
export class UpsertOneProjectsOnUsersResolver {
  @TypeGraphQL.Mutation(_returns => ProjectsOnUsers, {
    nullable: false
  })
  async upsertOneProjectsOnUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneProjectsOnUsersArgs): Promise<ProjectsOnUsers> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectsOnUsers.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
