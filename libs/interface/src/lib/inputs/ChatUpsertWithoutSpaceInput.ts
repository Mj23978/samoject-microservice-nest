import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateWithoutSpaceInput } from "../inputs/ChatCreateWithoutSpaceInput";
import { ChatUpdateWithoutSpaceInput } from "../inputs/ChatUpdateWithoutSpaceInput";

@InputType("ChatUpsertWithoutSpaceInput", {
  isAbstract: true
})
export class ChatUpsertWithoutSpaceInput {
  @Field(() => ChatUpdateWithoutSpaceInput, {
    nullable: false
  })
  update!: ChatUpdateWithoutSpaceInput;

  @Field(() => ChatCreateWithoutSpaceInput, {
    nullable: false
  })
  create!: ChatCreateWithoutSpaceInput;
}
