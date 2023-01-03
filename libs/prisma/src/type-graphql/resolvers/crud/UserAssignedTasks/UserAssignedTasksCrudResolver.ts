import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserAssignedTasksArgs } from "./args/AggregateUserAssignedTasksArgs";
import { CreateManyUserAssignedTasksArgs } from "./args/CreateManyUserAssignedTasksArgs";
import { CreateOneUserAssignedTasksArgs } from "./args/CreateOneUserAssignedTasksArgs";
import { DeleteManyUserAssignedTasksArgs } from "./args/DeleteManyUserAssignedTasksArgs";
import { DeleteOneUserAssignedTasksArgs } from "./args/DeleteOneUserAssignedTasksArgs";
import { FindFirstUserAssignedTasksArgs } from "./args/FindFirstUserAssignedTasksArgs";
import { FindFirstUserAssignedTasksOrThrowArgs } from "./args/FindFirstUserAssignedTasksOrThrowArgs";
import { FindManyUserAssignedTasksArgs } from "./args/FindManyUserAssignedTasksArgs";
import { FindUniqueUserAssignedTasksArgs } from "./args/FindUniqueUserAssignedTasksArgs";
import { FindUniqueUserAssignedTasksOrThrowArgs } from "./args/FindUniqueUserAssignedTasksOrThrowArgs";
import { GroupByUserAssignedTasksArgs } from "./args/GroupByUserAssignedTasksArgs";
import { UpdateManyUserAssignedTasksArgs } from "./args/UpdateManyUserAssignedTasksArgs";
import { UpdateOneUserAssignedTasksArgs } from "./args/UpdateOneUserAssignedTasksArgs";
import { UpsertOneUserAssignedTasksArgs } from "./args/UpsertOneUserAssignedTasksArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { UserAssignedTasks } from "../../../models/UserAssignedTasks";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUserAssignedTasks } from "../../outputs/AggregateUserAssignedTasks";
import { UserAssignedTasksGroupBy } from "../../outputs/UserAssignedTasksGroupBy";

@TypeGraphQL.Resolver(_of => UserAssignedTasks)
export class UserAssignedTasksCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateUserAssignedTasks, {
    nullable: false
  })
  async aggregateUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserAssignedTasksArgs): Promise<AggregateUserAssignedTasks> {
    return getPrismaFromContext(ctx).userAssignedTasks.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUserAssignedTasksArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserAssignedTasks, {
    nullable: false
  })
  async createOneUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserAssignedTasksArgs): Promise<UserAssignedTasks> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUserAssignedTasksArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserAssignedTasks, {
    nullable: true
  })
  async deleteOneUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUserAssignedTasksArgs): Promise<UserAssignedTasks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserAssignedTasks, {
    nullable: true
  })
  async findFirstUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserAssignedTasksArgs): Promise<UserAssignedTasks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserAssignedTasks, {
    nullable: true
  })
  async findFirstUserAssignedTasksOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserAssignedTasksOrThrowArgs): Promise<UserAssignedTasks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserAssignedTasks], {
    nullable: false
  })
  async findManyUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUserAssignedTasksArgs): Promise<UserAssignedTasks[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserAssignedTasks, {
    nullable: true
  })
  async findUniqueUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserAssignedTasksArgs): Promise<UserAssignedTasks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserAssignedTasks, {
    nullable: true
  })
  async findUniqueUserAssignedTasksOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserAssignedTasksOrThrowArgs): Promise<UserAssignedTasks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserAssignedTasksGroupBy], {
    nullable: false
  })
  async groupByUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserAssignedTasksArgs): Promise<UserAssignedTasksGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUserAssignedTasksArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserAssignedTasks, {
    nullable: true
  })
  async updateOneUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUserAssignedTasksArgs): Promise<UserAssignedTasks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserAssignedTasks, {
    nullable: false
  })
  async upsertOneUserAssignedTasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUserAssignedTasksArgs): Promise<UserAssignedTasks> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAssignedTasks.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
