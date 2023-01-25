import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProjectUpdateOneRequiredWithoutUsersNestedInput } from "../inputs/ProjectUpdateOneRequiredWithoutUsersNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@InputType("ProjectsOnUsersUpdateWithoutUserInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpdateWithoutUserInput {
  @Field(() => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedBy?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => ProjectUpdateOneRequiredWithoutUsersNestedInput, {
    nullable: true
  })
  project?: ProjectUpdateOneRequiredWithoutUsersNestedInput | undefined;
}
