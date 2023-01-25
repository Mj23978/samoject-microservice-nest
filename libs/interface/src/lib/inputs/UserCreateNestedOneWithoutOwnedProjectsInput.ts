import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutOwnedProjectsInput } from "../inputs/UserCreateOrConnectWithoutOwnedProjectsInput";
import { UserCreateWithoutOwnedProjectsInput } from "../inputs/UserCreateWithoutOwnedProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateNestedOneWithoutOwnedProjectsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutOwnedProjectsInput {
  @Field(() => UserCreateWithoutOwnedProjectsInput, {
    nullable: true
  })
  create?: UserCreateWithoutOwnedProjectsInput | undefined;

  @Field(() => UserCreateOrConnectWithoutOwnedProjectsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutOwnedProjectsInput | undefined;

  @Field(() => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
