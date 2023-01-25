import { Field, InputType } from "@nestjs/graphql";
import { ChatUpdateOneWithoutSpaceNestedInput } from "../inputs/ChatUpdateOneWithoutSpaceNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProjectUpdateOneRequiredWithoutSpacesNestedInput } from "../inputs/ProjectUpdateOneRequiredWithoutSpacesNestedInput";
import { SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput } from "../inputs/SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput";
import { SpaceUpdateOneWithoutSubspacesNestedInput } from "../inputs/SpaceUpdateOneWithoutSubspacesNestedInput";
import { SpaceViewUpdateOneRequiredWithoutSpaceNestedInput } from "../inputs/SpaceViewUpdateOneRequiredWithoutSpaceNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@InputType("SpaceUpdateWithoutSubspacesInput", {
  isAbstract: true
})
export class SpaceUpdateWithoutSubspacesInput {
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

  @Field(() => SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput, {
    nullable: true
  })
  settings?: SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput | undefined;

  @Field(() => SpaceViewUpdateOneRequiredWithoutSpaceNestedInput, {
    nullable: true
  })
  view?: SpaceViewUpdateOneRequiredWithoutSpaceNestedInput | undefined;
}
