import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutProjectsInput } from "../inputs/UserCreateOrConnectWithoutProjectsInput";
import { UserCreateWithoutProjectsInput } from "../inputs/UserCreateWithoutProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateNestedOneWithoutProjectsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutProjectsInput {
  @Field(() => UserCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: UserCreateWithoutProjectsInput | undefined;

  @Field(() => UserCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProjectsInput | undefined;

  @Field(() => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
