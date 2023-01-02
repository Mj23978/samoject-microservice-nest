import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAssignedTasksUpdateInput } from './user-assigned-tasks-update.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksWhereUniqueInput } from './user-assigned-tasks-where-unique.input';

@ArgsType()
export class UpdateOneUserAssignedTasksArgs {

    @Field(() => UserAssignedTasksUpdateInput, {nullable:false})
    @Type(() => UserAssignedTasksUpdateInput)
    data!: UserAssignedTasksUpdateInput;

    @Field(() => UserAssignedTasksWhereUniqueInput, {nullable:false})
    @Type(() => UserAssignedTasksWhereUniqueInput)
    where!: UserAssignedTasksWhereUniqueInput;
}
