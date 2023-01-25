import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutChatInput } from "../inputs/UserCreateOrConnectWithoutChatInput";
import { UserCreateWithoutChatInput } from "../inputs/UserCreateWithoutChatInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateNestedOneWithoutChatInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutChatInput {
  @Field(() => UserCreateWithoutChatInput, {
    nullable: true
  })
  create?: UserCreateWithoutChatInput | undefined;

  @Field(() => UserCreateOrConnectWithoutChatInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutChatInput | undefined;

  @Field(() => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
