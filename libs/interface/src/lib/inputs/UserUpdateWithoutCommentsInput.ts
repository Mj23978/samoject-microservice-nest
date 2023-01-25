import { Field, InputType } from "@nestjs/graphql";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ChatUpdateOneWithoutUserNestedInput } from "../inputs/ChatUpdateOneWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectsOnUsersUpdateManyWithoutUserNestedInput } from "../inputs/ProjectsOnUsersUpdateManyWithoutUserNestedInput";
import { ProjectUpdateManyWithoutOwnerNestedInput } from "../inputs/ProjectUpdateManyWithoutOwnerNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutCreatorNestedInput } from "../inputs/TaskUpdateManyWithoutCreatorNestedInput";
import { UserAssignedTasksUpdateManyWithoutUserNestedInput } from "../inputs/UserAssignedTasksUpdateManyWithoutUserNestedInput";
import { UserUpdateManyWithoutUser_ANestedInput } from "../inputs/UserUpdateManyWithoutUser_ANestedInput";
import { UserUpdateManyWithoutUser_BNestedInput } from "../inputs/UserUpdateManyWithoutUser_BNestedInput";
import { WorkspaceUpdateOneWithoutUserNestedInput } from "../inputs/WorkspaceUpdateOneWithoutUserNestedInput";

@InputType("UserUpdateWithoutCommentsInput", {
  isAbstract: true
})
export class UserUpdateWithoutCommentsInput {
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
  email?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  firstname?: NullableStringFieldUpdateOperationsInput | undefined;

  @Field(() => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  lastname?: NullableStringFieldUpdateOperationsInput | undefined;

  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @Field(() => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @Field(() => EnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined;

  @Field(() => ChatUpdateOneWithoutUserNestedInput, {
    nullable: true
  })
  chat?: ChatUpdateOneWithoutUserNestedInput | undefined;

  @Field(() => ProjectUpdateManyWithoutOwnerNestedInput, {
    nullable: true
  })
  ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput | undefined;

  @Field(() => ProjectsOnUsersUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  projects?: ProjectsOnUsersUpdateManyWithoutUserNestedInput | undefined;

  @Field(() => TaskUpdateManyWithoutCreatorNestedInput, {
    nullable: true
  })
  createdTasks?: TaskUpdateManyWithoutCreatorNestedInput | undefined;

  @Field(() => UserAssignedTasksUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  assignedTasks?: UserAssignedTasksUpdateManyWithoutUserNestedInput | undefined;

  @Field(() => WorkspaceUpdateOneWithoutUserNestedInput, {
    nullable: true
  })
  workspaces?: WorkspaceUpdateOneWithoutUserNestedInput | undefined;

  @Field(() => UserUpdateManyWithoutUser_ANestedInput, {
    nullable: true
  })
  User_B?: UserUpdateManyWithoutUser_ANestedInput | undefined;

  @Field(() => UserUpdateManyWithoutUser_BNestedInput, {
    nullable: true
  })
  User_A?: UserUpdateManyWithoutUser_BNestedInput | undefined;
}
