import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAssignedTasksWhereUniqueInput } from './user-assigned-tasks-where-unique.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksCreateWithoutTaskInput } from './user-assigned-tasks-create-without-task.input';

@InputType()
export class UserAssignedTasksCreateOrConnectWithoutTaskInput {

    @Field(() => UserAssignedTasksWhereUniqueInput, {nullable:false})
    @Type(() => UserAssignedTasksWhereUniqueInput)
    where!: UserAssignedTasksWhereUniqueInput;

    @Field(() => UserAssignedTasksCreateWithoutTaskInput, {nullable:false})
    @Type(() => UserAssignedTasksCreateWithoutTaskInput)
    create!: UserAssignedTasksCreateWithoutTaskInput;
}
