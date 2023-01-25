import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutWorkspacesInput } from "../inputs/UserCreateOrConnectWithoutWorkspacesInput";
import { UserCreateWithoutWorkspacesInput } from "../inputs/UserCreateWithoutWorkspacesInput";
import { UserUpdateWithoutWorkspacesInput } from "../inputs/UserUpdateWithoutWorkspacesInput";
import { UserUpsertWithoutWorkspacesInput } from "../inputs/UserUpsertWithoutWorkspacesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpdateOneRequiredWithoutWorkspacesNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutWorkspacesNestedInput {
  @Field(() => UserCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: UserCreateWithoutWorkspacesInput | undefined;

  @Field(() => UserCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput | undefined;

  @Field(() => UserUpsertWithoutWorkspacesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutWorkspacesInput | undefined;

  @Field(() => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @Field(() => UserUpdateWithoutWorkspacesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutWorkspacesInput | undefined;
}
