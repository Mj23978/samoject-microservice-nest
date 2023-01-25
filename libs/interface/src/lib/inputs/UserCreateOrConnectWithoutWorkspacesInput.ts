import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutWorkspacesInput } from "../inputs/UserCreateWithoutWorkspacesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateOrConnectWithoutWorkspacesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutWorkspacesInput {
  @Field(() => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: UserCreateWithoutWorkspacesInput;
}
