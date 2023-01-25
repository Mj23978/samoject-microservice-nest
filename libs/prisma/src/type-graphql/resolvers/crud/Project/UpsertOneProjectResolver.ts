import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Project } from "../../../models/Project";
import { UpsertOneProjectArgs } from "./args/UpsertOneProjectArgs";

@TypeGraphQL.Resolver(_of => Project)
export class UpsertOneProjectResolver {
  @TypeGraphQL.Mutation(_returns => Project, {
    nullable: false
  })
  async upsertOneProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneProjectArgs): Promise<Project> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).project.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
