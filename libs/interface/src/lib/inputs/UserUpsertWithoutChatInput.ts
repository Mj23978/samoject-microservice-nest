import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutChatInput } from "../inputs/UserCreateWithoutChatInput";
import { UserUpdateWithoutChatInput } from "../inputs/UserUpdateWithoutChatInput";

@InputType("UserUpsertWithoutChatInput", {
  isAbstract: true
})
export class UserUpsertWithoutChatInput {
  @Field(() => UserUpdateWithoutChatInput, {
    nullable: false
  })
  update!: UserUpdateWithoutChatInput;

  @Field(() => UserCreateWithoutChatInput, {
    nullable: false
  })
  create!: UserCreateWithoutChatInput;
}
