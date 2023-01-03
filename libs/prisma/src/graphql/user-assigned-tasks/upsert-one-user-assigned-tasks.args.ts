import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAssignedTasksWhereUniqueInput } from './user-assigned-tasks-where-unique.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksCreateInput } from './user-assigned-tasks-create.input';
import { UserAssignedTasksUpdateInput } from './user-assigned-tasks-update.input';

@ArgsType()
export class UpsertOneUserAssignedTasksArgs {

    @Field(() => UserAssignedTasksWhereUniqueInput, {nullable:false})
    @Type(() => UserAssignedTasksWhereUniqueInput)
    where!: UserAssignedTasksWhereUniqueInput;

    @Field(() => UserAssignedTasksCreateInput, {nullable:false})
    @Type(() => UserAssignedTasksCreateInput)
    create!: UserAssignedTasksCreateInput;

    @Field(() => UserAssignedTasksUpdateInput, {nullable:false})
    @Type(() => UserAssignedTasksUpdateInput)
    update!: UserAssignedTasksUpdateInput;
}
