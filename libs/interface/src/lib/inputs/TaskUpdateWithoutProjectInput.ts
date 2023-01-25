import { Field, InputType } from "@nestjs/graphql";
import { ChatUpdateOneWithoutTaskNestedInput } from "../inputs/ChatUpdateOneWithoutTaskNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutParentNestedInput } from "../inputs/TaskUpdateManyWithoutParentNestedInput";
import { TaskUpdateOneWithoutSubTasksNestedInput } from "../inputs/TaskUpdateOneWithoutSubTasksNestedInput";
import { UserAssignedTasksUpdateManyWithoutTaskNestedInput } from "../inputs/UserAssignedTasksUpdateManyWithoutTaskNestedInput";
import { UserUpdateOneWithoutCreatedTasksNestedInput } from "../inputs/UserUpdateOneWithoutCreatedTasksNestedInput";

@InputType("TaskUpdateWithoutProjectInput", {
  isAbstract: true
})
export class TaskUpdateWithoutProjectInput {
  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @Field(() => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  details?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => ChatUpdateOneWithoutTaskNestedInput, {
    nullable: true
  })
  chat?: ChatUpdateOneWithoutTaskNestedInput | undefined;

  @Field(() => UserUpdateOneWithoutCreatedTasksNestedInput, {
    nullable: true
  })
  creator?: UserUpdateOneWithoutCreatedTasksNestedInput | undefined;

  @Field(() => TaskUpdateOneWithoutSubTasksNestedInput, {
    nullable: true
  })
  parent?: TaskUpdateOneWithoutSubTasksNestedInput | undefined;

  @Field(() => TaskUpdateManyWithoutParentNestedInput, {
    nullable: true
  })
  subTasks?: TaskUpdateManyWithoutParentNestedInput | undefined;

  @Field(() => UserAssignedTasksUpdateManyWithoutTaskNestedInput, {
    nullable: true
  })
  assignes?: UserAssignedTasksUpdateManyWithoutTaskNestedInput | undefined;
}
