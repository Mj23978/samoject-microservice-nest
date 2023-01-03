import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateProjectsOnUsersArgs } from "./args/AggregateProjectsOnUsersArgs";
import { ProjectsOnUsers } from "../../../models/ProjectsOnUsers";
import { AggregateProjectsOnUsers } from "../../outputs/AggregateProjectsOnUsers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectsOnUsers)
export class AggregateProjectsOnUsersResolver {
  @TypeGraphQL.Query(_returns => AggregateProjectsOnUsers, {
    nullable: false
  })
  async aggregateProjectsOnUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProjectsOnUsersArgs): Promise<AggregateProjectsOnUsers> {
    return getPrismaFromContext(ctx).projectsOnUsers.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
