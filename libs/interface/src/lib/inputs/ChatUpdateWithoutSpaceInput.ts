import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutChatNestedInput } from "../inputs/MessageUpdateManyWithoutChatNestedInput";
import { ProjectUpdateOneWithoutChatNestedInput } from "../inputs/ProjectUpdateOneWithoutChatNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneWithoutChatNestedInput } from "../inputs/TaskUpdateOneWithoutChatNestedInput";
import { UserUpdateOneWithoutChatNestedInput } from "../inputs/UserUpdateOneWithoutChatNestedInput";

@InputType("ChatUpdateWithoutSpaceInput", {
  isAbstract: true
})
export class ChatUpdateWithoutSpaceInput {
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

  @Field(() => TaskUpdateOneWithoutChatNestedInput, {
    nullable: true
  })
  Task?: TaskUpdateOneWithoutChatNestedInput | undefined;

  @Field(() => UserUpdateOneWithoutChatNestedInput, {
    nullable: true
  })
  User?: UserUpdateOneWithoutChatNestedInput | undefined;
}
