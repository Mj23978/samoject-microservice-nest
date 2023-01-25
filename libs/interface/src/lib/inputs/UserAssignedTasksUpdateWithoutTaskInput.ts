import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAssignedTasksNestedInput } from "../inputs/UserUpdateOneRequiredWithoutAssignedTasksNestedInput";

@InputType("UserAssignedTasksUpdateWithoutTaskInput", {
  isAbstract: true
})
export class UserAssignedTasksUpdateWithoutTaskInput {
  @Field(() => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedBy?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => UserUpdateOneRequiredWithoutAssignedTasksNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput | undefined;
}
