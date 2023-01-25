import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutWorkspacesInput } from "../inputs/UserCreateOrConnectWithoutWorkspacesInput";
import { UserCreateWithoutWorkspacesInput } from "../inputs/UserCreateWithoutWorkspacesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateNestedOneWithoutWorkspacesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutWorkspacesInput {
  @Field(() => UserCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: UserCreateWithoutWorkspacesInput | undefined;

  @Field(() => UserCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput | undefined;

  @Field(() => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
