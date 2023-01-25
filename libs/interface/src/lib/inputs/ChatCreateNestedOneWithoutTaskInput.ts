import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateOrConnectWithoutTaskInput } from "../inputs/ChatCreateOrConnectWithoutTaskInput";
import { ChatCreateWithoutTaskInput } from "../inputs/ChatCreateWithoutTaskInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@InputType("ChatCreateNestedOneWithoutTaskInput", {
  isAbstract: true
})
export class ChatCreateNestedOneWithoutTaskInput {
  @Field(() => ChatCreateWithoutTaskInput, {
    nullable: true
  })
  create?: ChatCreateWithoutTaskInput | undefined;

  @Field(() => ChatCreateOrConnectWithoutTaskInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutTaskInput | undefined;

  @Field(() => ChatWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatWhereUniqueInput | undefined;
}
