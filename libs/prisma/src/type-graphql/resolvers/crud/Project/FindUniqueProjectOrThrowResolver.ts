import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Project } from "../../../models/Project";
import { FindUniqueProjectOrThrowArgs } from "./args/FindUniqueProjectOrThrowArgs";

@TypeGraphQL.Resolver(_of => Project)
export class FindUniqueProjectOrThrowResolver {
  @TypeGraphQL.Query(_returns => Project, {
    nullable: true
  })
  async getProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProjectOrThrowArgs): Promise<Project | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).project.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
