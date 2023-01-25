import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateWithoutSpaceInput } from "../inputs/ChatCreateWithoutSpaceInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@InputType("ChatCreateOrConnectWithoutSpaceInput", {
  isAbstract: true
})
export class ChatCreateOrConnectWithoutSpaceInput {
  @Field(() => ChatWhereUniqueInput, {
    nullable: false
  })
  where!: ChatWhereUniqueInput;

  @Field(() => ChatCreateWithoutSpaceInput, {
    nullable: false
  })
  create!: ChatCreateWithoutSpaceInput;
}
