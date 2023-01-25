import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutChatInput } from "../inputs/UserCreateWithoutChatInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateOrConnectWithoutChatInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutChatInput {
  @Field(() => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutChatInput, {
    nullable: false
  })
  create!: UserCreateWithoutChatInput;
}
