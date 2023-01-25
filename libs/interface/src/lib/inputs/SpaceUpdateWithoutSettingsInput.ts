import { Field, InputType } from "@nestjs/graphql";
import { ChatUpdateOneWithoutSpaceNestedInput } from "../inputs/ChatUpdateOneWithoutSpaceNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProjectUpdateOneRequiredWithoutSpacesNestedInput } from "../inputs/ProjectUpdateOneRequiredWithoutSpacesNestedInput";
import { SpaceUpdateManyWithoutParentNestedInput } from "../inputs/SpaceUpdateManyWithoutParentNestedInput";
import { SpaceUpdateOneWithoutSubspacesNestedInput } from "../inputs/SpaceUpdateOneWithoutSubspacesNestedInput";
import { SpaceViewUpdateOneRequiredWithoutSpaceNestedInput } from "../inputs/SpaceViewUpdateOneRequiredWithoutSpaceNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@InputType("SpaceUpdateWithoutSettingsInput", {
  isAbstract: true
})
export class SpaceUpdateWithoutSettingsInput {
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
  spaceType?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => ChatUpdateOneWithoutSpaceNestedInput, {
    nullable: true
  })
  chat?: ChatUpdateOneWithoutSpaceNestedInput | undefined;

  @Field(() => SpaceUpdateOneWithoutSubspacesNestedInput, {
    nullable: true
  })
  parent?: SpaceUpdateOneWithoutSubspacesNestedInput | undefined;

  @Field(() => ProjectUpdateOneRequiredWithoutSpacesNestedInput, {
    nullable: true
  })
  project?: ProjectUpdateOneRequiredWithoutSpacesNestedInput | undefined;

  @Field(() => SpaceViewUpdateOneRequiredWithoutSpaceNestedInput, {
    nullable: true
  })
  view?: SpaceViewUpdateOneRequiredWithoutSpaceNestedInput | undefined;

  @Field(() => SpaceUpdateManyWithoutParentNestedInput, {
    nullable: true
  })
  subspaces?: SpaceUpdateManyWithoutParentNestedInput | undefined;
}
