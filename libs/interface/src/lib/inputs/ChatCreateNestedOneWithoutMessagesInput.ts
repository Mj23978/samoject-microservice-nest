import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateOrConnectWithoutMessagesInput } from "../inputs/ChatCreateOrConnectWithoutMessagesInput";
import { ChatCreateWithoutMessagesInput } from "../inputs/ChatCreateWithoutMessagesInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@InputType("ChatCreateNestedOneWithoutMessagesInput", {
  isAbstract: true
})
export class ChatCreateNestedOneWithoutMessagesInput {
  @Field(() => ChatCreateWithoutMessagesInput, {
    nullable: true
  })
  create?: ChatCreateWithoutMessagesInput | undefined;

  @Field(() => ChatCreateOrConnectWithoutMessagesInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput | undefined;

  @Field(() => ChatWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatWhereUniqueInput | undefined;
}
