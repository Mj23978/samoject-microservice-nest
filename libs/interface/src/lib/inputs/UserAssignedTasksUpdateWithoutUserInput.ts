import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneRequiredWithoutAssignesNestedInput } from "../inputs/TaskUpdateOneRequiredWithoutAssignesNestedInput";

@InputType("UserAssignedTasksUpdateWithoutUserInput", {
  isAbstract: true
})
export class UserAssignedTasksUpdateWithoutUserInput {
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
}
