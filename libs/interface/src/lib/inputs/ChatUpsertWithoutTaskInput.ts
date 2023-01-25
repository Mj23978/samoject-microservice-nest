import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateWithoutTaskInput } from "../inputs/ChatCreateWithoutTaskInput";
import { ChatUpdateWithoutTaskInput } from "../inputs/ChatUpdateWithoutTaskInput";

@InputType("ChatUpsertWithoutTaskInput", {
  isAbstract: true
})
export class ChatUpsertWithoutTaskInput {
  @Field(() => ChatUpdateWithoutTaskInput, {
    nullable: false
  })
  update!: ChatUpdateWithoutTaskInput;

  @Field(() => ChatCreateWithoutTaskInput, {
    nullable: false
  })
  create!: ChatCreateWithoutTaskInput;
}
