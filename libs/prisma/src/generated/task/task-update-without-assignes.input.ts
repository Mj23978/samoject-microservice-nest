import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ChatUpdateOneWithoutTaskNestedInput } from '../chat/chat-update-one-without-task-nested.input';
import { UserUpdateOneWithoutCreatedTasksNestedInput } from '../user/user-update-one-without-created-tasks-nested.input';
import { TaskUpdateOneWithoutSubTasksNestedInput } from './task-update-one-without-sub-tasks-nested.input';
import { ProjectUpdateOneWithoutTasksNestedInput } from '../project/project-update-one-without-tasks-nested.input';
import { TaskUpdateManyWithoutParentNestedInput } from './task-update-many-without-parent-nested.input';

@InputType()
export class TaskUpdateWithoutAssignesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    details?: StringFieldUpdateOperationsInput;

    @Field(() => ChatUpdateOneWithoutTaskNestedInput, {nullable:true})
    chat?: ChatUpdateOneWithoutTaskNestedInput;

    @Field(() => UserUpdateOneWithoutCreatedTasksNestedInput, {nullable:true})
    creator?: UserUpdateOneWithoutCreatedTasksNestedInput;

    @Field(() => TaskUpdateOneWithoutSubTasksNestedInput, {nullable:true})
    parent?: TaskUpdateOneWithoutSubTasksNestedInput;

    @Field(() => ProjectUpdateOneWithoutTasksNestedInput, {nullable:true})
    project?: ProjectUpdateOneWithoutTasksNestedInput;

    @Field(() => TaskUpdateManyWithoutParentNestedInput, {nullable:true})
    subTasks?: TaskUpdateManyWithoutParentNestedInput;
}
