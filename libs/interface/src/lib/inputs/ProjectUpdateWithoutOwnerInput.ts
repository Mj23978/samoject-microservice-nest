import { Field, InputType } from "@nestjs/graphql";
import { ChatUpdateOneWithoutProjectNestedInput } from "../inputs/ChatUpdateOneWithoutProjectNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput } from "../inputs/ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput";
import { ProjectsOnUsersUpdateManyWithoutProjectNestedInput } from "../inputs/ProjectsOnUsersUpdateManyWithoutProjectNestedInput";
import { SpaceUpdateManyWithoutProjectNestedInput } from "../inputs/SpaceUpdateManyWithoutProjectNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutProjectNestedInput } from "../inputs/TaskUpdateManyWithoutProjectNestedInput";
import { WorkspaceUpdateOneRequiredWithoutProjectsNestedInput } from "../inputs/WorkspaceUpdateOneRequiredWithoutProjectsNestedInput";

@InputType("ProjectUpdateWithoutOwnerInput", {
  isAbstract: true
})
export class ProjectUpdateWithoutOwnerInput {
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
  title?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @Field(() => ChatUpdateOneWithoutProjectNestedInput, {
    nullable: true
  })
  chat?: ChatUpdateOneWithoutProjectNestedInput | undefined;

  @Field(() => ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput, {
    nullable: true
  })
  settings?: ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput | undefined;

  @Field(() => WorkspaceUpdateOneRequiredWithoutProjectsNestedInput, {
    nullable: true
  })
  workspace?: WorkspaceUpdateOneRequiredWithoutProjectsNestedInput | undefined;

  @Field(() => ProjectsOnUsersUpdateManyWithoutProjectNestedInput, {
    nullable: true
  })
  users?: ProjectsOnUsersUpdateManyWithoutProjectNestedInput | undefined;

  @Field(() => SpaceUpdateManyWithoutProjectNestedInput, {
    nullable: true
  })
  spaces?: SpaceUpdateManyWithoutProjectNestedInput | undefined;

  @Field(() => TaskUpdateManyWithoutProjectNestedInput, {
    nullable: true
  })
  tasks?: TaskUpdateManyWithoutProjectNestedInput | undefined;
}
