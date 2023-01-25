import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateWithoutMessagesInput } from "../inputs/ChatCreateWithoutMessagesInput";
import { ChatUpdateWithoutMessagesInput } from "../inputs/ChatUpdateWithoutMessagesInput";

@InputType("ChatUpsertWithoutMessagesInput", {
  isAbstract: true
})
export class ChatUpsertWithoutMessagesInput {
  @Field(() => ChatUpdateWithoutMessagesInput, {
    nullable: false
  })
  update!: ChatUpdateWithoutMessagesInput;

  @Field(() => ChatCreateWithoutMessagesInput, {
    nullable: false
  })
  create!: ChatCreateWithoutMessagesInput;
}
