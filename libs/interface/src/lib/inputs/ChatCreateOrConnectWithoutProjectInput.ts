import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateWithoutProjectInput } from "../inputs/ChatCreateWithoutProjectInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@InputType("ChatCreateOrConnectWithoutProjectInput", {
  isAbstract: true
})
export class ChatCreateOrConnectWithoutProjectInput {
  @Field(() => ChatWhereUniqueInput, {
    nullable: false
  })
  where!: ChatWhereUniqueInput;

  @Field(() => ChatCreateWithoutProjectInput, {
    nullable: false
  })
  create!: ChatCreateWithoutProjectInput;
}
