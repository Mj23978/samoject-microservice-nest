import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from "../../../helpers";
import { ProjectSettings } from "../../../models/ProjectSettings";
import { AggregateProjectSettings } from "../../outputs/AggregateProjectSettings";
import { AggregateProjectSettingsArgs } from "./args/AggregateProjectSettingsArgs";

@TypeGraphQL.Resolver(_of => ProjectSettings)
export class AggregateProjectSettingsResolver {
  @TypeGraphQL.Query(_returns => AggregateProjectSettings, {
    nullable: false
  })
  async aggregateProjectSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProjectSettingsArgs): Promise<AggregateProjectSettings> {
    return getPrismaFromContext(ctx).projectSettings.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
