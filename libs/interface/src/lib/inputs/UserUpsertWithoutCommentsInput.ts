import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutCommentsInput } from "../inputs/UserCreateWithoutCommentsInput";
import { UserUpdateWithoutCommentsInput } from "../inputs/UserUpdateWithoutCommentsInput";

@InputType("UserUpsertWithoutCommentsInput", {
  isAbstract: true
})
export class UserUpsertWithoutCommentsInput {
  @Field(() => UserUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCommentsInput;

  @Field(() => UserCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCommentsInput;
}
