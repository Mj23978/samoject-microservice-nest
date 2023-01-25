import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProjectUpdateOneRequiredWithoutSpacesNestedInput } from "../inputs/ProjectUpdateOneRequiredWithoutSpacesNestedInput";
import { SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput } from "../inputs/SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput";
import { SpaceUpdateManyWithoutParentNestedInput } from "../inputs/SpaceUpdateManyWithoutParentNestedInput";
import { SpaceUpdateOneWithoutSubspacesNestedInput } from "../inputs/SpaceUpdateOneWithoutSubspacesNestedInput";
import { SpaceViewUpdateOneRequiredWithoutSpaceNestedInput } from "../inputs/SpaceViewUpdateOneRequiredWithoutSpaceNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@InputType("SpaceUpdateWithoutChatInput", {
  isAbstract: true
})
export class SpaceUpdateWithoutChatInput {
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

  @Field(() => SpaceUpdateOneWithoutSubspacesNestedInput, {
    nullable: true
  })
  parent?: SpaceUpdateOneWithoutSubspacesNestedInput | undefined;

  @Field(() => ProjectUpdateOneRequiredWithoutSpacesNestedInput, {
    nullable: true
  })
  project?: ProjectUpdateOneRequiredWithoutSpacesNestedInput | undefined;

  @Field(() => SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput, {
    nullable: true
  })
  settings?: SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput | undefined;

  @Field(() => SpaceViewUpdateOneRequiredWithoutSpaceNestedInput, {
    nullable: true
  })
  view?: SpaceViewUpdateOneRequiredWithoutSpaceNestedInput | undefined;

  @Field(() => SpaceUpdateManyWithoutParentNestedInput, {
    nullable: true
  })
  subspaces?: SpaceUpdateManyWithoutParentNestedInput | undefined;
}
