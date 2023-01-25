import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProjectUpdateOneWithoutTasksNestedInput } from "../inputs/ProjectUpdateOneWithoutTasksNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutParentNestedInput } from "../inputs/TaskUpdateManyWithoutParentNestedInput";
import { TaskUpdateOneWithoutSubTasksNestedInput } from "../inputs/TaskUpdateOneWithoutSubTasksNestedInput";
import { UserAssignedTasksUpdateManyWithoutTaskNestedInput } from "../inputs/UserAssignedTasksUpdateManyWithoutTaskNestedInput";
import { UserUpdateOneWithoutCreatedTasksNestedInput } from "../inputs/UserUpdateOneWithoutCreatedTasksNestedInput";

@InputType("TaskUpdateWithoutChatInput", {
  isAbstract: true
})
export class TaskUpdateWithoutChatInput {
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

  @Field(() => UserUpdateOneWithoutCreatedTasksNestedInput, {
    nullable: true
  })
  creator?: UserUpdateOneWithoutCreatedTasksNestedInput | undefined;

  @Field(() => TaskUpdateOneWithoutSubTasksNestedInput, {
    nullable: true
  })
  parent?: TaskUpdateOneWithoutSubTasksNestedInput | undefined;

  @Field(() => ProjectUpdateOneWithoutTasksNestedInput, {
    nullable: true
  })
  project?: ProjectUpdateOneWithoutTasksNestedInput | undefined;

  @Field(() => TaskUpdateManyWithoutParentNestedInput, {
    nullable: true
  })
  subTasks?: TaskUpdateManyWithoutParentNestedInput | undefined;

  @Field(() => UserAssignedTasksUpdateManyWithoutTaskNestedInput, {
    nullable: true
  })
  assignes?: UserAssignedTasksUpdateManyWithoutTaskNestedInput | undefined;
}
