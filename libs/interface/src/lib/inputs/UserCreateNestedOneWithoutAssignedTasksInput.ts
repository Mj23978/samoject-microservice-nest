import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutAssignedTasksInput } from "../inputs/UserCreateOrConnectWithoutAssignedTasksInput";
import { UserCreateWithoutAssignedTasksInput } from "../inputs/UserCreateWithoutAssignedTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateNestedOneWithoutAssignedTasksInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutAssignedTasksInput {
  @Field(() => UserCreateWithoutAssignedTasksInput, {
    nullable: true
  })
  create?: UserCreateWithoutAssignedTasksInput | undefined;

  @Field(() => UserCreateOrConnectWithoutAssignedTasksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput | undefined;

  @Field(() => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
