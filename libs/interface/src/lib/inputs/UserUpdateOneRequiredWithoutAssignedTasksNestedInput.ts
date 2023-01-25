import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutAssignedTasksInput } from "../inputs/UserCreateOrConnectWithoutAssignedTasksInput";
import { UserCreateWithoutAssignedTasksInput } from "../inputs/UserCreateWithoutAssignedTasksInput";
import { UserUpdateWithoutAssignedTasksInput } from "../inputs/UserUpdateWithoutAssignedTasksInput";
import { UserUpsertWithoutAssignedTasksInput } from "../inputs/UserUpsertWithoutAssignedTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpdateOneRequiredWithoutAssignedTasksNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutAssignedTasksNestedInput {
  @Field(() => UserCreateWithoutAssignedTasksInput, {
    nullable: true
  })
  create?: UserCreateWithoutAssignedTasksInput | undefined;

  @Field(() => UserCreateOrConnectWithoutAssignedTasksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput | undefined;

  @Field(() => UserUpsertWithoutAssignedTasksInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutAssignedTasksInput | undefined;

  @Field(() => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @Field(() => UserUpdateWithoutAssignedTasksInput, {
    nullable: true
  })
  update?: UserUpdateWithoutAssignedTasksInput | undefined;
}
