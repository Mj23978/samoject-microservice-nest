import { getPrismaFromContext } from "../../../helpers";
import { Chat } from "../../../models/Chat";
import { Message } from "../../../models/Message";
import { User } from "../../../models/User";
import { MessageSubMessagesArgs } from "./args/MessageSubMessagesArgs";

@TypeGraphQL.Resolver(_of => Message)
export class MessageRelationsResolver {
  @FieldResolver(() => Chat, {
    nullable: false
  })
  async chat(@TypeGraphQL.Root() message: Message, @TypeGraphQL.Ctx() ctx: any): Promise<Chat> {
    return getPrismaFromContext(ctx).message.findUnique({
      where: {
        id: message.id,
      },
    }).chat({});
  }

  @FieldResolver(() => Message, {
    nullable: true
  })
  async parent(@TypeGraphQL.Root() message: Message, @TypeGraphQL.Ctx() ctx: any): Promise<Message | null> {
    return getPrismaFromContext(ctx).message.findUnique({
      where: {
        id: message.id,
      },
    }).parent({});
  }

  @FieldResolver(() => User, {
    nullable: true
  })
  async sender(@TypeGraphQL.Root() message: Message, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).message.findUnique({
      where: {
        id: message.id,
      },
    }).sender({});
  }

  @FieldResolver(() => [Message], {
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
