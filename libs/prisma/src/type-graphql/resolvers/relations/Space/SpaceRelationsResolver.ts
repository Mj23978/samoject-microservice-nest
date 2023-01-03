import * as TypeGraphQL from "type-graphql";
import { Chat } from "../../../models/Chat";
import { Project } from "../../../models/Project";
import { Space } from "../../../models/Space";
import { SpaceSettings } from "../../../models/SpaceSettings";
import { SpaceView } from "../../../models/SpaceView";
import { SpaceSubspacesArgs } from "./args/SpaceSubspacesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Space)
export class SpaceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Chat, {
    nullable: true
  })
  async chat(@TypeGraphQL.Root() space: Space, @TypeGraphQL.Ctx() ctx: any): Promise<Chat | null> {
    return getPrismaFromContext(ctx).space.findUnique({
      where: {
        id: space.id,
      },
    }).chat({});
  }

  @TypeGraphQL.FieldResolver(_type => Space, {
    nullable: true
  })
  async parent(@TypeGraphQL.Root() space: Space, @TypeGraphQL.Ctx() ctx: any): Promise<Space | null> {
    return getPrismaFromContext(ctx).space.findUnique({
      where: {
        id: space.id,
      },
    }).parent({});
  }

  @TypeGraphQL.FieldResolver(_type => Project, {
    nullable: false
  })
  async project(@TypeGraphQL.Root() space: Space, @TypeGraphQL.Ctx() ctx: any): Promise<Project> {
    return getPrismaFromContext(ctx).space.findUnique({
      where: {
        id: space.id,
      },
    }).project({});
  }

  @TypeGraphQL.FieldResolver(_type => SpaceSettings, {
    nullable: false
  })
  async settings(@TypeGraphQL.Root() space: Space, @TypeGraphQL.Ctx() ctx: any): Promise<SpaceSettings> {
    return getPrismaFromContext(ctx).space.findUnique({
      where: {
        id: space.id,
      },
    }).settings({});
  }

  @TypeGraphQL.FieldResolver(_type => SpaceView, {
    nullable: false
  })
  async view(@TypeGraphQL.Root() space: Space, @TypeGraphQL.Ctx() ctx: any): Promise<SpaceView> {
    return getPrismaFromContext(ctx).space.findUnique({
      where: {
        id: space.id,
      },
    }).view({});
  }

  @TypeGraphQL.FieldResolver(_type => [Space], {
    nullable: false
  })
  async subspaces(@TypeGraphQL.Root() space: Space, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SpaceSubspacesArgs): Promise<Space[]> {
    return getPrismaFromContext(ctx).space.findUnique({
      where: {
        id: space.id,
      },
    }).subspaces(args);
  }
}
