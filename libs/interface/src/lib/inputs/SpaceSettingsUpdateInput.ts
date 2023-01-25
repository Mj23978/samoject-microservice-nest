import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SpaceUpdateOneWithoutSettingsNestedInput } from "../inputs/SpaceUpdateOneWithoutSettingsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@InputType("SpaceSettingsUpdateInput", {
  isAbstract: true
})
export class SpaceSettingsUpdateInput {
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
  spaceId?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => SpaceUpdateOneWithoutSettingsNestedInput, {
    nullable: true
  })
  space?: SpaceUpdateOneWithoutSettingsNestedInput | undefined;
}
