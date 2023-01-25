import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Project } from "../../../models/Project";
import { AggregateProject } from "../../outputs/AggregateProject";
import { AggregateProjectArgs } from "./args/AggregateProjectArgs";

@TypeGraphQL.Resolver(_of => Project)
export class AggregateProjectResolver {
  @TypeGraphQL.Query(_returns => AggregateProject, {
    nullable: false
  })
  async aggregateProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProjectArgs): Promise<AggregateProject> {
    return getPrismaFromContext(ctx).project.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
