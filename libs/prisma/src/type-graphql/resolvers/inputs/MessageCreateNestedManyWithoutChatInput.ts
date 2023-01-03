import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyChatInputEnvelope } from "../inputs/MessageCreateManyChatInputEnvelope";
import { MessageCreateOrConnectWithoutChatInput } from "../inputs/MessageCreateOrConnectWithoutChatInput";
import { MessageCreateWithoutChatInput } from "../inputs/MessageCreateWithoutChatInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateNestedManyWithoutChatInput", {
  isAbstract: true
})
export class MessageCreateNestedManyWithoutChatInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutChatInput], {
    nullable: true
  })
  create?: MessageCreateWithoutChatInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutChatInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutChatInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyChatInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManyChatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;
}
