import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProjectUpdateOneRequiredWithoutUsersNestedInput } from "../inputs/ProjectUpdateOneRequiredWithoutUsersNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutProjectsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutProjectsNestedInput";

@InputType("ProjectsOnUsersUpdateInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpdateInput {
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

  @Field(() => UserUpdateOneRequiredWithoutProjectsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutProjectsNestedInput | undefined;
}
