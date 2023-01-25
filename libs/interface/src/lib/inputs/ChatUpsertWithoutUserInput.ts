import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateWithoutUserInput } from "../inputs/ChatCreateWithoutUserInput";
import { ChatUpdateWithoutUserInput } from "../inputs/ChatUpdateWithoutUserInput";

@InputType("ChatUpsertWithoutUserInput", {
  isAbstract: true
})
export class ChatUpsertWithoutUserInput {
  @Field(() => ChatUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ChatUpdateWithoutUserInput;

  @Field(() => ChatCreateWithoutUserInput, {
    nullable: false
  })
  create!: ChatCreateWithoutUserInput;
}
