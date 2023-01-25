import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutCreatedTasksInput } from "../inputs/UserCreateOrConnectWithoutCreatedTasksInput";
import { UserCreateWithoutCreatedTasksInput } from "../inputs/UserCreateWithoutCreatedTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateNestedOneWithoutCreatedTasksInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutCreatedTasksInput {
  @Field(() => UserCreateWithoutCreatedTasksInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedTasksInput | undefined;

  @Field(() => UserCreateOrConnectWithoutCreatedTasksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput | undefined;

  @Field(() => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
