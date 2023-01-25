import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutUser_BInput } from "../inputs/UserCreateWithoutUser_BInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateOrConnectWithoutUser_BInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutUser_BInput {
  @Field(() => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutUser_BInput, {
    nullable: false
  })
  create!: UserCreateWithoutUser_BInput;
}
