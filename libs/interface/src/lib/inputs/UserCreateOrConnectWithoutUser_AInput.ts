import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutUser_AInput } from "../inputs/UserCreateWithoutUser_AInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateOrConnectWithoutUser_AInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutUser_AInput {
  @Field(() => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutUser_AInput, {
    nullable: false
  })
  create!: UserCreateWithoutUser_AInput;
}
