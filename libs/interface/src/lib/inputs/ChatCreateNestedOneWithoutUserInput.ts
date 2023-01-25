import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateOrConnectWithoutUserInput } from "../inputs/ChatCreateOrConnectWithoutUserInput";
import { ChatCreateWithoutUserInput } from "../inputs/ChatCreateWithoutUserInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@InputType("ChatCreateNestedOneWithoutUserInput", {
  isAbstract: true
})
export class ChatCreateNestedOneWithoutUserInput {
  @Field(() => ChatCreateWithoutUserInput, {
    nullable: true
  })
  create?: ChatCreateWithoutUserInput | undefined;

  @Field(() => ChatCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutUserInput | undefined;

  @Field(() => ChatWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatWhereUniqueInput | undefined;
}
