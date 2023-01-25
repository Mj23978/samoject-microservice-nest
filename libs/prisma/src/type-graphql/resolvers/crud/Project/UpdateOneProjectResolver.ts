import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Project } from "../../../models/Project";
import { UpdateOneProjectArgs } from "./args/UpdateOneProjectArgs";

@TypeGraphQL.Resolver(_of => Project)
export class UpdateOneProjectResolver {
  @TypeGraphQL.Mutation(_returns => Project, {
    nullable: true
  })
  async updateOneProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneProjectArgs): Promise<Project | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).project.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
