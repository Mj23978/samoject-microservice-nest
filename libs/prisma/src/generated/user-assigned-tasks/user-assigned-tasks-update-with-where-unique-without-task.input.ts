import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAssignedTasksWhereUniqueInput } from './user-assigned-tasks-where-unique.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksUpdateWithoutTaskInput } from './user-assigned-tasks-update-without-task.input';

@InputType()
export class UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput {

    @Field(() => UserAssignedTasksWhereUniqueInput, {nullable:false})
    @Type(() => UserAssignedTasksWhereUniqueInput)
    where!: UserAssignedTasksWhereUniqueInput;

    @Field(() => UserAssignedTasksUpdateWithoutTaskInput, {nullable:false})
    @Type(() => UserAssignedTasksUpdateWithoutTaskInput)
    data!: UserAssignedTasksUpdateWithoutTaskInput;
}
