import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateWithoutProjectInput } from "../inputs/ChatCreateWithoutProjectInput";
import { ChatUpdateWithoutProjectInput } from "../inputs/ChatUpdateWithoutProjectInput";

@InputType("ChatUpsertWithoutProjectInput", {
  isAbstract: true
})
export class ChatUpsertWithoutProjectInput {
  @Field(() => ChatUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: ChatUpdateWithoutProjectInput;

  @Field(() => ChatCreateWithoutProjectInput, {
    nullable: false
  })
  create!: ChatCreateWithoutProjectInput;
}
