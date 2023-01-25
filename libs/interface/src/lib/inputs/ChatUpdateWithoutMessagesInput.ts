import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProjectUpdateOneWithoutChatNestedInput } from "../inputs/ProjectUpdateOneWithoutChatNestedInput";
import { SpaceUpdateOneWithoutChatNestedInput } from "../inputs/SpaceUpdateOneWithoutChatNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneWithoutChatNestedInput } from "../inputs/TaskUpdateOneWithoutChatNestedInput";
import { UserUpdateOneWithoutChatNestedInput } from "../inputs/UserUpdateOneWithoutChatNestedInput";

@InputType("ChatUpdateWithoutMessagesInput", {
  isAbstract: true
})
export class ChatUpdateWithoutMessagesInput {
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

  @Field(() => ProjectUpdateOneWithoutChatNestedInput, {
    nullable: true
  })
  Project?: ProjectUpdateOneWithoutChatNestedInput | undefined;

  @Field(() => SpaceUpdateOneWithoutChatNestedInput, {
    nullable: true
  })
  Space?: SpaceUpdateOneWithoutChatNestedInput | undefined;

  @Field(() => TaskUpdateOneWithoutChatNestedInput, {
    nullable: true
  })
  Task?: TaskUpdateOneWithoutChatNestedInput | undefined;

  @Field(() => UserUpdateOneWithoutChatNestedInput, {
    nullable: true
  })
  User?: UserUpdateOneWithoutChatNestedInput | undefined;
}
