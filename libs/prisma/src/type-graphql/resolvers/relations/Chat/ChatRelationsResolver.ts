import * as TypeGraphQL from "type-graphql";
import { Chat } from "../../../models/Chat";
import { Message } from "../../../models/Message";
import { Project } from "../../../models/Project";
import { Space } from "../../../models/Space";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { ChatMessagesArgs } from "./args/ChatMessagesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Chat)
export class ChatRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false
  })
  async messages(@TypeGraphQL.Root() chat: Chat, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ChatMessagesArgs): Promise<Message[]> {
    return getPrismaFromContext(ctx).chat.findUnique({
      where: {
        id: chat.id,
      },
    }).messages(args);
  }

  @TypeGraphQL.FieldResolver(_type => Project, {
    nullable: true
  })
  async Project(@TypeGraphQL.Root() chat: Chat, @TypeGraphQL.Ctx() ctx: any): Promise<Project | null> {
    return getPrismaFromContext(ctx).chat.findUnique({
      where: {
        id: chat.id,
      },
    }).Project({});
  }

  @TypeGraphQL.FieldResolver(_type => Space, {
    nullable: true
  })
  async Space(@TypeGraphQL.Root() chat: Chat, @TypeGraphQL.Ctx() ctx: any): Promise<Space | null> {
    return getPrismaFromContext(ctx).chat.findUnique({
      where: {
        id: chat.id,
      },
    }).Space({});
  }

  @TypeGraphQL.FieldResolver(_type => Task, {
    nullable: true
  })
  async Task(@TypeGraphQL.Root() chat: Chat, @TypeGraphQL.Ctx() ctx: any): Promise<Task | null> {
    return getPrismaFromContext(ctx).chat.findUnique({
      where: {
        id: chat.id,
      },
    }).Task({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async User(@TypeGraphQL.Root() chat: Chat, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).chat.findUnique({
      where: {
        id: chat.id,
      },
    }).User({});
  }
}
