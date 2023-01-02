import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { TaskUncheckedUpdateManyWithoutParentNestedInput } from './task-unchecked-update-many-without-parent-nested.input';
import { UserAssignedTasksUncheckedUpdateManyWithoutTaskNestedInput } from '../user-assigned-tasks/user-assigned-tasks-unchecked-update-many-without-task-nested.input';

@InputType()
export class TaskUncheckedUpdateWithoutParentInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    projectId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    creatorId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    details?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    chatId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => TaskUncheckedUpdateManyWithoutParentNestedInput, {nullable:true})
    subTasks?: TaskUncheckedUpdateManyWithoutParentNestedInput;

    @Field(() => UserAssignedTasksUncheckedUpdateManyWithoutTaskNestedInput, {nullable:true})
    assignes?: UserAssignedTasksUncheckedUpdateManyWithoutTaskNestedInput;
}
