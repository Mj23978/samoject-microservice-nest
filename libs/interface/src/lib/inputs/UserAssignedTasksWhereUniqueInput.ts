import { Field, InputType } from "@nestjs/graphql";
import { UserAssignedTasksTaskIdUserIdCompoundUniqueInput } from "../inputs/UserAssignedTasksTaskIdUserIdCompoundUniqueInput";

@InputType("UserAssignedTasksWhereUniqueInput", {
  isAbstract: true
})
export class UserAssignedTasksWhereUniqueInput {
  @Field(() => UserAssignedTasksTaskIdUserIdCompoundUniqueInput, {
    nullable: true
  })
  taskId_userId?: UserAssignedTasksTaskIdUserIdCompoundUniqueInput | undefined;
}
