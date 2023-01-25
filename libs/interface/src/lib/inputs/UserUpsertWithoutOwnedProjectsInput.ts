import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutOwnedProjectsInput } from "../inputs/UserCreateWithoutOwnedProjectsInput";
import { UserUpdateWithoutOwnedProjectsInput } from "../inputs/UserUpdateWithoutOwnedProjectsInput";

@InputType("UserUpsertWithoutOwnedProjectsInput", {
  isAbstract: true
})
export class UserUpsertWithoutOwnedProjectsInput {
  @Field(() => UserUpdateWithoutOwnedProjectsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutOwnedProjectsInput;

  @Field(() => UserCreateWithoutOwnedProjectsInput, {
    nullable: false
  })
  create!: UserCreateWithoutOwnedProjectsInput;
}
