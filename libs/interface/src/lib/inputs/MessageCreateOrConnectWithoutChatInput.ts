import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateWithoutChatInput } from "../inputs/MessageCreateWithoutChatInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageCreateOrConnectWithoutChatInput", {
  isAbstract: true
})
export class MessageCreateOrConnectWithoutChatInput {
  @Field(() => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @Field(() => MessageCreateWithoutChatInput, {
    nullable: false
  })
  create!: MessageCreateWithoutChatInput;
}
