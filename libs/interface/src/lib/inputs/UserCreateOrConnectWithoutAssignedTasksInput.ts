import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutAssignedTasksInput } from "../inputs/UserCreateWithoutAssignedTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateOrConnectWithoutAssignedTasksInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutAssignedTasksInput {
  @Field(() => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutAssignedTasksInput, {
    nullable: false
  })
  create!: UserCreateWithoutAssignedTasksInput;
}
