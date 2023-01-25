import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateWithoutUserInput } from "../inputs/ChatCreateWithoutUserInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@InputType("ChatCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ChatCreateOrConnectWithoutUserInput {
  @Field(() => ChatWhereUniqueInput, {
    nullable: false
  })
  where!: ChatWhereUniqueInput;

  @Field(() => ChatCreateWithoutUserInput, {
    nullable: false
  })
  create!: ChatCreateWithoutUserInput;
}
