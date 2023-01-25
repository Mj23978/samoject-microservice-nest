import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutChatNestedInput } from "../inputs/MessageUpdateManyWithoutChatNestedInput";
import { ProjectUpdateOneWithoutChatNestedInput } from "../inputs/ProjectUpdateOneWithoutChatNestedInput";
import { SpaceUpdateOneWithoutChatNestedInput } from "../inputs/SpaceUpdateOneWithoutChatNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutChatNestedInput } from "../inputs/UserUpdateOneWithoutChatNestedInput";

@InputType("ChatUpdateWithoutTaskInput", {
  isAbstract: true
})
export class ChatUpdateWithoutTaskInput {
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

  @Field(() => MessageUpdateManyWithoutChatNestedInput, {
    nullable: true
  })
  messages?: MessageUpdateManyWithoutChatNestedInput | undefined;

  @Field(() => ProjectUpdateOneWithoutChatNestedInput, {
    nullable: true
  })
  Project?: ProjectUpdateOneWithoutChatNestedInput | undefined;

  @Field(() => SpaceUpdateOneWithoutChatNestedInput, {
    nullable: true
  })
  Space?: SpaceUpdateOneWithoutChatNestedInput | undefined;

  @Field(() => UserUpdateOneWithoutChatNestedInput, {
    nullable: true
  })
  User?: UserUpdateOneWithoutChatNestedInput | undefined;
}
