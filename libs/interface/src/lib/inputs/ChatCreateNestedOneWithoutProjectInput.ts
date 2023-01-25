import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateOrConnectWithoutProjectInput } from "../inputs/ChatCreateOrConnectWithoutProjectInput";
import { ChatCreateWithoutProjectInput } from "../inputs/ChatCreateWithoutProjectInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@InputType("ChatCreateNestedOneWithoutProjectInput", {
  isAbstract: true
})
export class ChatCreateNestedOneWithoutProjectInput {
  @Field(() => ChatCreateWithoutProjectInput, {
    nullable: true
  })
  create?: ChatCreateWithoutProjectInput | undefined;

  @Field(() => ChatCreateOrConnectWithoutProjectInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutProjectInput | undefined;

  @Field(() => ChatWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatWhereUniqueInput | undefined;
}
