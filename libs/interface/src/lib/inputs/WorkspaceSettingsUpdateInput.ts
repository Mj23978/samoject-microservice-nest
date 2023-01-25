import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WorkspaceUpdateOneWithoutSettingsNestedInput } from "../inputs/WorkspaceUpdateOneWithoutSettingsNestedInput";

@InputType("WorkspaceSettingsUpdateInput", {
  isAbstract: true
})
export class WorkspaceSettingsUpdateInput {
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
  localId?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  workspaceId?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => WorkspaceUpdateOneWithoutSettingsNestedInput, {
    nullable: true
  })
  workspace?: WorkspaceUpdateOneWithoutSettingsNestedInput | undefined;
}
