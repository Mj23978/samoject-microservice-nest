import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutChatNestedInput } from "../inputs/MessageUpdateManyWithoutChatNestedInput";
import { ProjectUpdateOneWithoutChatNestedInput } from "../inputs/ProjectUpdateOneWithoutChatNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneWithoutChatNestedInput } from "../inputs/TaskUpdateOneWithoutChatNestedInput";
import { UserUpdateOneWithoutChatNestedInput } from "../inputs/UserUpdateOneWithoutChatNestedInput";

@TypeGraphQL.InputType("ChatUpdateWithoutSpaceInput", {
  isAbstract: true
})
export class ChatUpdateWithoutSpaceInput {
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

  @TypeGraphQL.Field(_type => TaskUpdateOneWithoutChatNestedInput, {
    nullable: true
  })
  Task?: TaskUpdateOneWithoutChatNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutChatNestedInput, {
    nullable: true
  })
  User?: UserUpdateOneWithoutChatNestedInput | undefined;
}
