import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateWithoutMessagesInput } from "../inputs/ChatCreateWithoutMessagesInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@InputType("ChatCreateOrConnectWithoutMessagesInput", {
  isAbstract: true
})
export class ChatCreateOrConnectWithoutMessagesInput {
  @Field(() => ChatWhereUniqueInput, {
    nullable: false
  })
  where!: ChatWhereUniqueInput;

  @Field(() => ChatCreateWithoutMessagesInput, {
    nullable: false
  })
  create!: ChatCreateWithoutMessagesInput;
}
