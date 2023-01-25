import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutUser_BInput } from "../inputs/UserCreateWithoutUser_BInput";
import { UserUpdateWithoutUser_BInput } from "../inputs/UserUpdateWithoutUser_BInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpsertWithWhereUniqueWithoutUser_BInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutUser_BInput {
  @Field(() => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutUser_BInput, {
    nullable: false
  })
  update!: UserUpdateWithoutUser_BInput;

  @Field(() => UserCreateWithoutUser_BInput, {
    nullable: false
  })
  create!: UserCreateWithoutUser_BInput;
}
