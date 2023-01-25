import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { Project } from "../../../models/Project";
import { FindFirstProjectOrThrowArgs } from "./args/FindFirstProjectOrThrowArgs";

@TypeGraphQL.Resolver(_of => Project)
export class FindFirstProjectOrThrowResolver {
  @TypeGraphQL.Query(_returns => Project, {
    nullable: true
  })
  async findFirstProjectOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProjectOrThrowArgs): Promise<Project | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).project.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
