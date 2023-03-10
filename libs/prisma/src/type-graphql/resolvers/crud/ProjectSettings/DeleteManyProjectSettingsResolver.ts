import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../helpers";
import { ProjectSettings } from "../../../models/ProjectSettings";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyProjectSettingsArgs } from "./args/DeleteManyProjectSettingsArgs";

@TypeGraphQL.Resolver(_of => ProjectSettings)
export class DeleteManyProjectSettingsResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProjectSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyProjectSettingsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectSettings.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
