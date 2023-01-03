import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAssignedTasksWhereUniqueInput } from './user-assigned-tasks-where-unique.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksUpdateWithoutTaskInput } from './user-assigned-tasks-update-without-task.input';
import { UserAssignedTasksCreateWithoutTaskInput } from './user-assigned-tasks-create-without-task.input';

@InputType()
export class UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput {

    @Field(() => UserAssignedTasksWhereUniqueInput, {nullable:false})
    @Type(() => UserAssignedTasksWhereUniqueInput)
    where!: UserAssignedTasksWhereUniqueInput;

    @Field(() => UserAssignedTasksUpdateWithoutTaskInput, {nullable:false})
    @Type(() => UserAssignedTasksUpdateWithoutTaskInput)
    update!: UserAssignedTasksUpdateWithoutTaskInput;

    @Field(() => UserAssignedTasksCreateWithoutTaskInput, {nullable:false})
    @Type(() => UserAssignedTasksCreateWithoutTaskInput)
    create!: UserAssignedTasksCreateWithoutTaskInput;
}
