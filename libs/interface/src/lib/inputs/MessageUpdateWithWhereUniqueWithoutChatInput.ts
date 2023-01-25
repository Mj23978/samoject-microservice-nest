import { Field, InputType } from "@nestjs/graphql";
import { MessageUpdateWithoutChatInput } from "../inputs/MessageUpdateWithoutChatInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageUpdateWithWhereUniqueWithoutChatInput", {
  isAbstract: true
})
export class MessageUpdateWithWhereUniqueWithoutChatInput {
  @Field(() => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @Field(() => MessageUpdateWithoutChatInput, {
    nullable: false
  })
  data!: MessageUpdateWithoutChatInput;
}
