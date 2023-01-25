import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneRequiredWithoutAssignesNestedInput } from "../inputs/TaskUpdateOneRequiredWithoutAssignesNestedInput";
import { UserUpdateOneRequiredWithoutAssignedTasksNestedInput } from "../inputs/UserUpdateOneRequiredWithoutAssignedTasksNestedInput";

@InputType("UserAssignedTasksUpdateInput", {
  isAbstract: true
})
export class UserAssignedTasksUpdateInput {
  @Field(() => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedBy?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => TaskUpdateOneRequiredWithoutAssignesNestedInput, {
    nullable: true
  })
  task?: TaskUpdateOneRequiredWithoutAssignesNestedInput | undefined;

  @Field(() => UserUpdateOneRequiredWithoutAssignedTasksNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput | undefined;
}
