import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutChatNestedInput } from "../inputs/MessageUpdateManyWithoutChatNestedInput";
import { ProjectUpdateOneWithoutChatNestedInput } from "../inputs/ProjectUpdateOneWithoutChatNestedInput";
import { SpaceUpdateOneWithoutChatNestedInput } from "../inputs/SpaceUpdateOneWithoutChatNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneWithoutChatNestedInput } from "../inputs/TaskUpdateOneWithoutChatNestedInput";

@TypeGraphQL.InputType("ChatUpdateWithoutUserInput", {
  isAbstract: true
})
export class ChatUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateManyWithoutChatNestedInput, {
    nullable: true
  })
  messages?: MessageUpdateManyWithoutChatNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateOneWithoutChatNestedInput, {
    nullable: true
  })
  Project?: ProjectUpdateOneWithoutChatNestedInput | undefined;

  @TypeGraphQL.Field(_type => SpaceUpdateOneWithoutChatNestedInput, {
    nullable: true
  })
  Space?: SpaceUpdateOneWithoutChatNestedInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateOneWithoutChatNestedInput, {
    nullable: true
  })
  Task?: TaskUpdateOneWithoutChatNestedInput | undefined;
}
