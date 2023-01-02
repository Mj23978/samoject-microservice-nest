import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateNestedOneWithoutTaskInput } from '../chat/chat-create-nested-one-without-task.input';
import { UserCreateNestedOneWithoutCreatedTasksInput } from '../user/user-create-nested-one-without-created-tasks.input';
import { ProjectCreateNestedOneWithoutTasksInput } from '../project/project-create-nested-one-without-tasks.input';
import { TaskCreateNestedManyWithoutParentInput } from './task-create-nested-many-without-parent.input';
import { UserAssignedTasksCreateNestedManyWithoutTaskInput } from '../user-assigned-tasks/user-assigned-tasks-create-nested-many-without-task.input';

@InputType()
export class TaskCreateWithoutParentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:false})
    details!: string;

    @Field(() => ChatCreateNestedOneWithoutTaskInput, {nullable:true})
    chat?: ChatCreateNestedOneWithoutTaskInput;

    @Field(() => UserCreateNestedOneWithoutCreatedTasksInput, {nullable:true})
    creator?: UserCreateNestedOneWithoutCreatedTasksInput;

    @Field(() => ProjectCreateNestedOneWithoutTasksInput, {nullable:true})
    project?: ProjectCreateNestedOneWithoutTasksInput;

    @Field(() => TaskCreateNestedManyWithoutParentInput, {nullable:true})
    subTasks?: TaskCreateNestedManyWithoutParentInput;

    @Field(() => UserAssignedTasksCreateNestedManyWithoutTaskInput, {nullable:true})
    assignes?: UserAssignedTasksCreateNestedManyWithoutTaskInput;
}
