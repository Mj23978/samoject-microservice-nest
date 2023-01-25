import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutUser_AInput } from "../inputs/UserCreateWithoutUser_AInput";
import { UserUpdateWithoutUser_AInput } from "../inputs/UserUpdateWithoutUser_AInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpsertWithWhereUniqueWithoutUser_AInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutUser_AInput {
  @Field(() => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutUser_AInput, {
    nullable: false
  })
  update!: UserUpdateWithoutUser_AInput;

  @Field(() => UserCreateWithoutUser_AInput, {
    nullable: false
  })
  create!: UserCreateWithoutUser_AInput;
}
