import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { ChatUpdateOneWithoutUserNestedInput } from '../chat/chat-update-one-without-user-nested.input';
import { MessageUpdateManyWithoutSenderNestedInput } from '../message/message-update-many-without-sender-nested.input';
import { ProjectUpdateManyWithoutOwnerNestedInput } from '../project/project-update-many-without-owner-nested.input';
import { ProjectsOnUsersUpdateManyWithoutUserNestedInput } from '../projects-on-users/projects-on-users-update-many-without-user-nested.input';
import { TaskUpdateManyWithoutCreatorNestedInput } from '../task/task-update-many-without-creator-nested.input';
import { UserAssignedTasksUpdateManyWithoutUserNestedInput } from '../user-assigned-tasks/user-assigned-tasks-update-many-without-user-nested.input';
import { WorkspaceUpdateOneWithoutUserNestedInput } from '../workspace/workspace-update-one-without-user-nested.input';
import { UserUpdateManyWithoutUser_ANestedInput } from './user-update-many-without-user-a-nested.input';
import { UserUpdateManyWithoutUser_BNestedInput } from './user-update-many-without-user-b-nested.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstname?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastname?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => ChatUpdateOneWithoutUserNestedInput, {nullable:true})
    chat?: ChatUpdateOneWithoutUserNestedInput;

    @Field(() => MessageUpdateManyWithoutSenderNestedInput, {nullable:true})
    comments?: MessageUpdateManyWithoutSenderNestedInput;

    @Field(() => ProjectUpdateManyWithoutOwnerNestedInput, {nullable:true})
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput;

    @Field(() => ProjectsOnUsersUpdateManyWithoutUserNestedInput, {nullable:true})
    projects?: ProjectsOnUsersUpdateManyWithoutUserNestedInput;

    @Field(() => TaskUpdateManyWithoutCreatorNestedInput, {nullable:true})
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput;

    @Field(() => UserAssignedTasksUpdateManyWithoutUserNestedInput, {nullable:true})
    assignedTasks?: UserAssignedTasksUpdateManyWithoutUserNestedInput;

    @Field(() => WorkspaceUpdateOneWithoutUserNestedInput, {nullable:true})
    workspaces?: WorkspaceUpdateOneWithoutUserNestedInput;

    @Field(() => UserUpdateManyWithoutUser_ANestedInput, {nullable:true})
    User_B?: UserUpdateManyWithoutUser_ANestedInput;

    @Field(() => UserUpdateManyWithoutUser_BNestedInput, {nullable:true})
    User_A?: UserUpdateManyWithoutUser_BNestedInput;
}
