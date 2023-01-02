import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCreatedTasksInput } from '../user/user-create-nested-one-without-created-tasks.input';
import { TaskCreateNestedOneWithoutSubTasksInput } from './task-create-nested-one-without-sub-tasks.input';
import { ProjectCreateNestedOneWithoutTasksInput } from '../project/project-create-nested-one-without-tasks.input';
import { TaskCreateNestedManyWithoutParentInput } from './task-create-nested-many-without-parent.input';
import { UserAssignedTasksCreateNestedManyWithoutTaskInput } from '../user-assigned-tasks/user-assigned-tasks-create-nested-many-without-task.input';

@InputType()
export class TaskCreateWithoutChatInput {

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

    @Field(() => UserCreateNestedOneWithoutCreatedTasksInput, {nullable:true})
    creator?: UserCreateNestedOneWithoutCreatedTasksInput;

    @Field(() => TaskCreateNestedOneWithoutSubTasksInput, {nullable:true})
    parent?: TaskCreateNestedOneWithoutSubTasksInput;

    @Field(() => ProjectCreateNestedOneWithoutTasksInput, {nullable:true})
    project?: ProjectCreateNestedOneWithoutTasksInput;

    @Field(() => TaskCreateNestedManyWithoutParentInput, {nullable:true})
    subTasks?: TaskCreateNestedManyWithoutParentInput;

    @Field(() => UserAssignedTasksCreateNestedManyWithoutTaskInput, {nullable:true})
    assignes?: UserAssignedTasksCreateNestedManyWithoutTaskInput;
}
