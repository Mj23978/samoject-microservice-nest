import { getPrismaFromContext } from "../../../helpers";
import { Chat } from "../../../models/Chat";
import { Project } from "../../../models/Project";
import { Space } from "../../../models/Space";
import { SpaceSettings } from "../../../models/SpaceSettings";
import { SpaceView } from "../../../models/SpaceView";
import { SpaceSubspacesArgs } from "./args/SpaceSubspacesArgs";

@TypeGraphQL.Resolver(_of => Space)
export class SpaceRelationsResolver {
  @FieldResolver(() => Chat, {
    nullable: true
  })
  async chat(@TypeGraphQL.Root() space: Space, @TypeGraphQL.Ctx() ctx: any): Promise<Chat | null> {
    return getPrismaFromContext(ctx).space.findUnique({
      where: {
        id: space.id,
      },
    }).chat({});
  }

  @FieldResolver(() => Space, {
    nullable: true
  })
  async parent(@TypeGraphQL.Root() space: Space, @TypeGraphQL.Ctx() ctx: any): Promise<Space | null> {
    return getPrismaFromContext(ctx).space.findUnique({
      where: {
        id: space.id,
      },
    }).parent({});
  }

  @FieldResolver(() => Project, {
    nullable: false
  })
  async project(@TypeGraphQL.Root() space: Space, @TypeGraphQL.Ctx() ctx: any): Promise<Project> {
    return getPrismaFromContext(ctx).space.findUnique({
      where: {
        id: space.id,
      },
    }).project({});
  }

  @FieldResolver(() => SpaceSettings, {
    nullable: false
  })
  async settings(@TypeGraphQL.Root() space: Space, @TypeGraphQL.Ctx() ctx: any): Promise<SpaceSettings> {
    return getPrismaFromContext(ctx).space.findUnique({
      where: {
        id: space.id,
      },
    }).settings({});
  }

  @FieldResolver(() => SpaceView, {
    nullable: false
  })
  async view(@TypeGraphQL.Root() space: Space, @TypeGraphQL.Ctx() ctx: any): Promise<SpaceView> {
    return getPrismaFromContext(ctx).space.findUnique({
      where: {
        id: space.id,
      },
    }).view({});
  }

  @FieldResolver(() => [Space], {
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
