import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutProjectsInput } from "../inputs/UserCreateOrConnectWithoutProjectsInput";
import { UserCreateWithoutProjectsInput } from "../inputs/UserCreateWithoutProjectsInput";
import { UserUpdateWithoutProjectsInput } from "../inputs/UserUpdateWithoutProjectsInput";
import { UserUpsertWithoutProjectsInput } from "../inputs/UserUpsertWithoutProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpdateOneRequiredWithoutProjectsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutProjectsNestedInput {
  @Field(() => UserCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: UserCreateWithoutProjectsInput | undefined;

  @Field(() => UserCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProjectsInput | undefined;

  @Field(() => UserUpsertWithoutProjectsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutProjectsInput | undefined;

  @Field(() => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @Field(() => UserUpdateWithoutProjectsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutProjectsInput | undefined;
}
