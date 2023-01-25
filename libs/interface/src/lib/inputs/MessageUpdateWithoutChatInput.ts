import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutParentNestedInput } from "../inputs/MessageUpdateManyWithoutParentNestedInput";
import { MessageUpdateOneWithoutSubMessagesNestedInput } from "../inputs/MessageUpdateOneWithoutSubMessagesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutCommentsNestedInput } from "../inputs/UserUpdateOneWithoutCommentsNestedInput";

@InputType("MessageUpdateWithoutChatInput", {
  isAbstract: true
})
export class MessageUpdateWithoutChatInput {
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
  content?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  contentType?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => MessageUpdateOneWithoutSubMessagesNestedInput, {
    nullable: true
  })
  parent?: MessageUpdateOneWithoutSubMessagesNestedInput | undefined;

  @Field(() => UserUpdateOneWithoutCommentsNestedInput, {
    nullable: true
  })
  sender?: UserUpdateOneWithoutCommentsNestedInput | undefined;

  @Field(() => MessageUpdateManyWithoutParentNestedInput, {
    nullable: true
  })
  subMessages?: MessageUpdateManyWithoutParentNestedInput | undefined;
}
