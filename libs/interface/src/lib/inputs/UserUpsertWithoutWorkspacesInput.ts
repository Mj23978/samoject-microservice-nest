import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutWorkspacesInput } from "../inputs/UserCreateWithoutWorkspacesInput";
import { UserUpdateWithoutWorkspacesInput } from "../inputs/UserUpdateWithoutWorkspacesInput";

@InputType("UserUpsertWithoutWorkspacesInput", {
  isAbstract: true
})
export class UserUpsertWithoutWorkspacesInput {
  @Field(() => UserUpdateWithoutWorkspacesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutWorkspacesInput;

  @Field(() => UserCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: UserCreateWithoutWorkspacesInput;
}
