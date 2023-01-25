import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Project } from "../../../models/Project";
import { CreateOneProjectArgs } from "./args/CreateOneProjectArgs";

@TypeGraphQL.Resolver(_of => Project)
export class CreateOneProjectResolver {
  @TypeGraphQL.Mutation(_returns => Project, {
    nullable: false
  })
  async createOneProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneProjectArgs): Promise<Project> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).project.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
