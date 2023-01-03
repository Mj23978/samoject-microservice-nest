import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutParentNestedInput } from "../inputs/MessageUpdateManyWithoutParentNestedInput";
import { MessageUpdateOneWithoutSubMessagesNestedInput } from "../inputs/MessageUpdateOneWithoutSubMessagesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutCommentsNestedInput } from "../inputs/UserUpdateOneWithoutCommentsNestedInput";

@TypeGraphQL.InputType("MessageUpdateWithoutChatInput", {
  isAbstract: true
})
export class MessageUpdateWithoutChatInput {
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

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  contentType?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateOneWithoutSubMessagesNestedInput, {
    nullable: true
  })
  parent?: MessageUpdateOneWithoutSubMessagesNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutCommentsNestedInput, {
    nullable: true
  })
  sender?: UserUpdateOneWithoutCommentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateManyWithoutParentNestedInput, {
    nullable: true
  })
  subMessages?: MessageUpdateManyWithoutParentNestedInput | undefined;
}
