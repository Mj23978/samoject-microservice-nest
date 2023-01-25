import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateWithoutTaskInput } from "../inputs/ChatCreateWithoutTaskInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@InputType("ChatCreateOrConnectWithoutTaskInput", {
  isAbstract: true
})
export class ChatCreateOrConnectWithoutTaskInput {
  @Field(() => ChatWhereUniqueInput, {
    nullable: false
  })
  where!: ChatWhereUniqueInput;

  @Field(() => ChatCreateWithoutTaskInput, {
    nullable: false
  })
  create!: ChatCreateWithoutTaskInput;
}
