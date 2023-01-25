import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutProjectsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutProjectsNestedInput";

@InputType("ProjectsOnUsersUpdateWithoutProjectInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpdateWithoutProjectInput {
  @Field(() => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedBy?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => UserUpdateOneRequiredWithoutProjectsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutProjectsNestedInput | undefined;
}
