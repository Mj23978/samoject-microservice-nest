import { Field, InputType } from "@nestjs/graphql";
import { UserUpdateWithoutUser_AInput } from "../inputs/UserUpdateWithoutUser_AInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpdateWithWhereUniqueWithoutUser_AInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutUser_AInput {
  @Field(() => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutUser_AInput, {
    nullable: false
  })
  data!: UserUpdateWithoutUser_AInput;
}
