import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput } from "../inputs/ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput";
import { ProjectsOnUsersUpdateManyWithoutProjectNestedInput } from "../inputs/ProjectsOnUsersUpdateManyWithoutProjectNestedInput";
import { SpaceUpdateManyWithoutProjectNestedInput } from "../inputs/SpaceUpdateManyWithoutProjectNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutProjectNestedInput } from "../inputs/TaskUpdateManyWithoutProjectNestedInput";
import { UserUpdateOneRequiredWithoutOwnedProjectsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutOwnedProjectsNestedInput";
import { WorkspaceUpdateOneRequiredWithoutProjectsNestedInput } from "../inputs/WorkspaceUpdateOneRequiredWithoutProjectsNestedInput";

@InputType("ProjectUpdateWithoutChatInput", {
  isAbstract: true
})
export class ProjectUpdateWithoutChatInput {
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

  @Field(() => UserUpdateOneRequiredWithoutOwnedProjectsNestedInput, {
    nullable: true
  })
  owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput | undefined;

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
