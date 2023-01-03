import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWorkspaceSettingsArgs } from "./args/AggregateWorkspaceSettingsArgs";
import { CreateManyWorkspaceSettingsArgs } from "./args/CreateManyWorkspaceSettingsArgs";
import { CreateOneWorkspaceSettingsArgs } from "./args/CreateOneWorkspaceSettingsArgs";
import { DeleteManyWorkspaceSettingsArgs } from "./args/DeleteManyWorkspaceSettingsArgs";
import { DeleteOneWorkspaceSettingsArgs } from "./args/DeleteOneWorkspaceSettingsArgs";
import { FindFirstWorkspaceSettingsArgs } from "./args/FindFirstWorkspaceSettingsArgs";
import { FindFirstWorkspaceSettingsOrThrowArgs } from "./args/FindFirstWorkspaceSettingsOrThrowArgs";
import { FindManyWorkspaceSettingsArgs } from "./args/FindManyWorkspaceSettingsArgs";
import { FindUniqueWorkspaceSettingsArgs } from "./args/FindUniqueWorkspaceSettingsArgs";
import { FindUniqueWorkspaceSettingsOrThrowArgs } from "./args/FindUniqueWorkspaceSettingsOrThrowArgs";
import { GroupByWorkspaceSettingsArgs } from "./args/GroupByWorkspaceSettingsArgs";
import { UpdateManyWorkspaceSettingsArgs } from "./args/UpdateManyWorkspaceSettingsArgs";
import { UpdateOneWorkspaceSettingsArgs } from "./args/UpdateOneWorkspaceSettingsArgs";
import { UpsertOneWorkspaceSettingsArgs } from "./args/UpsertOneWorkspaceSettingsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { WorkspaceSettings } from "../../../models/WorkspaceSettings";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateWorkspaceSettings } from "../../outputs/AggregateWorkspaceSettings";
import { WorkspaceSettingsGroupBy } from "../../outputs/WorkspaceSettingsGroupBy";

@TypeGraphQL.Resolver(_of => WorkspaceSettings)
export class WorkspaceSettingsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateWorkspaceSettings, {
    nullable: false
  })
  async aggregateWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWorkspaceSettingsArgs): Promise<AggregateWorkspaceSettings> {
    return getPrismaFromContext(ctx).workspaceSettings.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyWorkspaceSettingsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => WorkspaceSettings, {
    nullable: false
  })
  async createOneWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneWorkspaceSettingsArgs): Promise<WorkspaceSettings> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyWorkspaceSettingsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => WorkspaceSettings, {
    nullable: true
  })
  async deleteOneWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWorkspaceSettingsArgs): Promise<WorkspaceSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => WorkspaceSettings, {
    nullable: true
  })
  async findFirstWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWorkspaceSettingsArgs): Promise<WorkspaceSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => WorkspaceSettings, {
    nullable: true
  })
  async findFirstWorkspaceSettingsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWorkspaceSettingsOrThrowArgs): Promise<WorkspaceSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [WorkspaceSettings], {
    nullable: false
  })
  async findManyWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyWorkspaceSettingsArgs): Promise<WorkspaceSettings[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => WorkspaceSettings, {
    nullable: true
  })
  async findUniqueWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWorkspaceSettingsArgs): Promise<WorkspaceSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => WorkspaceSettings, {
    nullable: true
  })
  async findUniqueWorkspaceSettingsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWorkspaceSettingsOrThrowArgs): Promise<WorkspaceSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [WorkspaceSettingsGroupBy], {
    nullable: false
  })
  async groupByWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWorkspaceSettingsArgs): Promise<WorkspaceSettingsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyWorkspaceSettingsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => WorkspaceSettings, {
    nullable: true
  })
  async updateOneWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWorkspaceSettingsArgs): Promise<WorkspaceSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => WorkspaceSettings, {
    nullable: false
  })
  async upsertOneWorkspaceSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWorkspaceSettingsArgs): Promise<WorkspaceSettings> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workspaceSettings.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
