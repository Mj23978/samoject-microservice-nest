import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateManyChatInputEnvelope } from "../inputs/MessageCreateManyChatInputEnvelope";
import { MessageCreateOrConnectWithoutChatInput } from "../inputs/MessageCreateOrConnectWithoutChatInput";
import { MessageCreateWithoutChatInput } from "../inputs/MessageCreateWithoutChatInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageCreateNestedManyWithoutChatInput", {
  isAbstract: true
})
export class MessageCreateNestedManyWithoutChatInput {
  @Field(() => [MessageCreateWithoutChatInput], {
    nullable: true
  })
  create?: MessageCreateWithoutChatInput[] | undefined;

  @Field(() => [MessageCreateOrConnectWithoutChatInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutChatInput[] | undefined;

  @Field(() => MessageCreateManyChatInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManyChatInputEnvelope | undefined;

  @Field(() => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;
}
