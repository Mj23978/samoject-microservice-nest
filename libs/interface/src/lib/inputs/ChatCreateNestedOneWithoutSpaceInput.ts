import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateOrConnectWithoutSpaceInput } from "../inputs/ChatCreateOrConnectWithoutSpaceInput";
import { ChatCreateWithoutSpaceInput } from "../inputs/ChatCreateWithoutSpaceInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@InputType("ChatCreateNestedOneWithoutSpaceInput", {
  isAbstract: true
})
export class ChatCreateNestedOneWithoutSpaceInput {
  @Field(() => ChatCreateWithoutSpaceInput, {
    nullable: true
  })
  create?: ChatCreateWithoutSpaceInput | undefined;

  @Field(() => ChatCreateOrConnectWithoutSpaceInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutSpaceInput | undefined;

  @Field(() => ChatWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatWhereUniqueInput | undefined;
}
