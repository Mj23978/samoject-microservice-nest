import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateProjectSettingsArgs } from "./args/AggregateProjectSettingsArgs";
import { ProjectSettings } from "../../../models/ProjectSettings";
import { AggregateProjectSettings } from "../../outputs/AggregateProjectSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

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
