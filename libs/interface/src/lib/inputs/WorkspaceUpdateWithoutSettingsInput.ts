import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProjectUpdateManyWithoutWorkspaceNestedInput } from "../inputs/ProjectUpdateManyWithoutWorkspaceNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutWorkspacesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutWorkspacesNestedInput";

@InputType("WorkspaceUpdateWithoutSettingsInput", {
  isAbstract: true
})
export class WorkspaceUpdateWithoutSettingsInput {
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

  @Field(() => UserUpdateOneRequiredWithoutWorkspacesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput | undefined;

  @Field(() => ProjectUpdateManyWithoutWorkspaceNestedInput, {
    nullable: true
  })
  projects?: ProjectUpdateManyWithoutWorkspaceNestedInput | undefined;
}
