import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ChatUpdateOneWithoutUserNestedInput } from "../inputs/ChatUpdateOneWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutSenderNestedInput } from "../inputs/MessageUpdateManyWithoutSenderNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectUpdateManyWithoutOwnerNestedInput } from "../inputs/ProjectUpdateManyWithoutOwnerNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutCreatorNestedInput } from "../inputs/TaskUpdateManyWithoutCreatorNestedInput";
import { UserAssignedTasksUpdateManyWithoutUserNestedInput } from "../inputs/UserAssignedTasksUpdateManyWithoutUserNestedInput";
import { UserUpdateManyWithoutUser_ANestedInput } from "../inputs/UserUpdateManyWithoutUser_ANestedInput";
import { UserUpdateManyWithoutUser_BNestedInput } from "../inputs/UserUpdateManyWithoutUser_BNestedInput";
import { WorkspaceUpdateOneWithoutUserNestedInput } from "../inputs/WorkspaceUpdateOneWithoutUserNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutProjectsInput", {
  isAbstract: true
})
export class UserUpdateWithoutProjectsInput {
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
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  firstname?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  lastname?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ChatUpdateOneWithoutUserNestedInput, {
    nullable: true
  })
  chat?: ChatUpdateOneWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateManyWithoutSenderNestedInput, {
    nullable: true
  })
  comments?: MessageUpdateManyWithoutSenderNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateManyWithoutOwnerNestedInput, {
    nullable: true
  })
  ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutCreatorNestedInput, {
    nullable: true
  })
  createdTasks?: TaskUpdateManyWithoutCreatorNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  assignedTasks?: UserAssignedTasksUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceUpdateOneWithoutUserNestedInput, {
    nullable: true
  })
  workspaces?: WorkspaceUpdateOneWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutUser_ANestedInput, {
    nullable: true
  })
  User_B?: UserUpdateManyWithoutUser_ANestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutUser_BNestedInput, {
    nullable: true
  })
  User_A?: UserUpdateManyWithoutUser_BNestedInput | undefined;
}
