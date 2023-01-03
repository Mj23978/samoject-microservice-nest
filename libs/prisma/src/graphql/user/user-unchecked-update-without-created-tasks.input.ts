import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { MessageUncheckedUpdateManyWithoutSenderNestedInput } from '../message/message-unchecked-update-many-without-sender-nested.input';
import { ProjectUncheckedUpdateManyWithoutOwnerNestedInput } from '../project/project-unchecked-update-many-without-owner-nested.input';
import { ProjectsOnUsersUncheckedUpdateManyWithoutUserNestedInput } from '../projects-on-users/projects-on-users-unchecked-update-many-without-user-nested.input';
import { UserAssignedTasksUncheckedUpdateManyWithoutUserNestedInput } from '../user-assigned-tasks/user-assigned-tasks-unchecked-update-many-without-user-nested.input';
import { WorkspaceUncheckedUpdateOneWithoutUserNestedInput } from '../workspace/workspace-unchecked-update-one-without-user-nested.input';
import { UserUncheckedUpdateManyWithoutUser_ANestedInput } from './user-unchecked-update-many-without-user-a-nested.input';
import { UserUncheckedUpdateManyWithoutUser_BNestedInput } from './user-unchecked-update-many-without-user-b-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutCreatedTasksInput {

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

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    chatId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => MessageUncheckedUpdateManyWithoutSenderNestedInput, {nullable:true})
    comments?: MessageUncheckedUpdateManyWithoutSenderNestedInput;

    @Field(() => ProjectUncheckedUpdateManyWithoutOwnerNestedInput, {nullable:true})
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput;

    @Field(() => ProjectsOnUsersUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    projects?: ProjectsOnUsersUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => UserAssignedTasksUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    assignedTasks?: UserAssignedTasksUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => WorkspaceUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    workspaces?: WorkspaceUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutUser_ANestedInput, {nullable:true})
    User_B?: UserUncheckedUpdateManyWithoutUser_ANestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutUser_BNestedInput, {nullable:true})
    User_A?: UserUncheckedUpdateManyWithoutUser_BNestedInput;
}
