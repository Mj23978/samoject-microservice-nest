import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutOwnedProjectsInput } from "../inputs/UserCreateWithoutOwnedProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateOrConnectWithoutOwnedProjectsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutOwnedProjectsInput {
  @Field(() => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutOwnedProjectsInput, {
    nullable: false
  })
  create!: UserCreateWithoutOwnedProjectsInput;
}
