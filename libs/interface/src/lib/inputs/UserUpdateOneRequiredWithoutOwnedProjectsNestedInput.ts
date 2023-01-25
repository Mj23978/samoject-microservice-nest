import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutOwnedProjectsInput } from "../inputs/UserCreateOrConnectWithoutOwnedProjectsInput";
import { UserCreateWithoutOwnedProjectsInput } from "../inputs/UserCreateWithoutOwnedProjectsInput";
import { UserUpdateWithoutOwnedProjectsInput } from "../inputs/UserUpdateWithoutOwnedProjectsInput";
import { UserUpsertWithoutOwnedProjectsInput } from "../inputs/UserUpsertWithoutOwnedProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpdateOneRequiredWithoutOwnedProjectsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutOwnedProjectsNestedInput {
  @Field(() => UserCreateWithoutOwnedProjectsInput, {
    nullable: true
  })
  create?: UserCreateWithoutOwnedProjectsInput | undefined;

  @Field(() => UserCreateOrConnectWithoutOwnedProjectsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutOwnedProjectsInput | undefined;

  @Field(() => UserUpsertWithoutOwnedProjectsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutOwnedProjectsInput | undefined;

  @Field(() => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @Field(() => UserUpdateWithoutOwnedProjectsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutOwnedProjectsInput | undefined;
}
