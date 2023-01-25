import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProjectUpdateManyWithoutWorkspaceNestedInput } from "../inputs/ProjectUpdateManyWithoutWorkspaceNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput } from "../inputs/WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput";

@InputType("WorkspaceUpdateWithoutUserInput", {
  isAbstract: true
})
export class WorkspaceUpdateWithoutUserInput {
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

  @Field(() => WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput, {
    nullable: true
  })
  settings?: WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput | undefined;

  @Field(() => ProjectUpdateManyWithoutWorkspaceNestedInput, {
    nullable: true
  })
  projects?: ProjectUpdateManyWithoutWorkspaceNestedInput | undefined;
}
