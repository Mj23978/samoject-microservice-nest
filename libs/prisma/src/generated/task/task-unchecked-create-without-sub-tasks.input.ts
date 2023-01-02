import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAssignedTasksUncheckedCreateNestedManyWithoutTaskInput } from '../user-assigned-tasks/user-assigned-tasks-unchecked-create-nested-many-without-task.input';

@InputType()
export class TaskUncheckedCreateWithoutSubTasksInput {

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

    @Field(() => UserAssignedTasksUncheckedCreateNestedManyWithoutTaskInput, {nullable:true})
    assignes?: UserAssignedTasksUncheckedCreateNestedManyWithoutTaskInput;
}
