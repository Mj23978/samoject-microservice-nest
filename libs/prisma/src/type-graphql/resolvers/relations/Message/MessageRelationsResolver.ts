import * as TypeGraphQL from "type-graphql";
import { Chat } from "../../../models/Chat";
import { Message } from "../../../models/Message";
import { User } from "../../../models/User";
import { MessageSubMessagesArgs } from "./args/MessageSubMessagesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Message)
export class MessageRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Chat, {
    nullable: false
  })
  async chat(@TypeGraphQL.Root() message: Message, @TypeGraphQL.Ctx() ctx: any): Promise<Chat> {
    return getPrismaFromContext(ctx).message.findUnique({
      where: {
        id: message.id,
      },
    }).chat({});
  }

  @TypeGraphQL.FieldResolver(_type => Message, {
    nullable: true
  })
  async parent(@TypeGraphQL.Root() message: Message, @TypeGraphQL.Ctx() ctx: any): Promise<Message | null> {
    return getPrismaFromContext(ctx).message.findUnique({
      where: {
        id: message.id,
      },
    }).parent({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async sender(@TypeGraphQL.Root() message: Message, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).message.findUnique({
      where: {
        id: message.id,
      },
    }).sender({});
  }

  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false
  })
  async subMessages(@TypeGraphQL.Root() message: Message, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MessageSubMessagesArgs): Promise<Message[]> {
    return getPrismaFromContext(ctx).message.findUnique({
      where: {
        id: message.id,
      },
    }).subMessages(args);
  }
}
