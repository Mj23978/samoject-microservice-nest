import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUncheckedCreateNestedManyWithoutParentInput } from './task-unchecked-create-nested-many-without-parent.input';
import { UserAssignedTasksUncheckedCreateNestedManyWithoutTaskInput } from '../user-assigned-tasks/user-assigned-tasks-unchecked-create-nested-many-without-task.input';

@InputType()
export class TaskUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    projectId?: string;

    @Field(() => String, {nullable:true})
    creatorId?: string;

    @Field(() => String, {nullable:true})
    parentId?: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:false})
    details!: string;

    @Field(() => String, {nullable:true})
    chatId?: string;

    @Field(() => TaskUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentInput;

    @Field(() => UserAssignedTasksUncheckedCreateNestedManyWithoutTaskInput, {nullable:true})
    assignes?: UserAssignedTasksUncheckedCreateNestedManyWithoutTaskInput;
}
