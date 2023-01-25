import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutProjectsInput } from "../inputs/UserCreateWithoutProjectsInput";
import { UserUpdateWithoutProjectsInput } from "../inputs/UserUpdateWithoutProjectsInput";

@InputType("UserUpsertWithoutProjectsInput", {
  isAbstract: true
})
export class UserUpsertWithoutProjectsInput {
  @Field(() => UserUpdateWithoutProjectsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutProjectsInput;

  @Field(() => UserCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: UserCreateWithoutProjectsInput;
}
