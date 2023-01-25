import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateWithoutSubMessagesInput } from "../inputs/MessageCreateWithoutSubMessagesInput";
import { MessageUpdateWithoutSubMessagesInput } from "../inputs/MessageUpdateWithoutSubMessagesInput";

@InputType("MessageUpsertWithoutSubMessagesInput", {
  isAbstract: true
})
export class MessageUpsertWithoutSubMessagesInput {
  @Field(() => MessageUpdateWithoutSubMessagesInput, {
    nullable: false
  })
  update!: MessageUpdateWithoutSubMessagesInput;

  @Field(() => MessageCreateWithoutSubMessagesInput, {
    nullable: false
  })
  create!: MessageCreateWithoutSubMessagesInput;
}
