import { Field, InputType } from "@nestjs/graphql";
import { UserUpdateWithoutUser_BInput } from "../inputs/UserUpdateWithoutUser_BInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpdateWithWhereUniqueWithoutUser_BInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutUser_BInput {
  @Field(() => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutUser_BInput, {
    nullable: false
  })
  data!: UserUpdateWithoutUser_BInput;
}
