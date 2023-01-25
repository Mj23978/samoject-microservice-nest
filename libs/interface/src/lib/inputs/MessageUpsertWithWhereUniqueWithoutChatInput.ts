import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateWithoutChatInput } from "../inputs/MessageCreateWithoutChatInput";
import { MessageUpdateWithoutChatInput } from "../inputs/MessageUpdateWithoutChatInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageUpsertWithWhereUniqueWithoutChatInput", {
  isAbstract: true
})
export class MessageUpsertWithWhereUniqueWithoutChatInput {
  @Field(() => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @Field(() => MessageUpdateWithoutChatInput, {
    nullable: false
  })
  update!: MessageUpdateWithoutChatInput;

  @Field(() => MessageCreateWithoutChatInput, {
    nullable: false
  })
  create!: MessageCreateWithoutChatInput;
}
