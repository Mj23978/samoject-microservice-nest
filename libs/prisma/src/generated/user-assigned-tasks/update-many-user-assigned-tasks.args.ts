import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAssignedTasksUpdateManyMutationInput } from './user-assigned-tasks-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksWhereInput } from './user-assigned-tasks-where.input';

@ArgsType()
export class UpdateManyUserAssignedTasksArgs {

    @Field(() => UserAssignedTasksUpdateManyMutationInput, {nullable:false})
    @Type(() => UserAssignedTasksUpdateManyMutationInput)
    data!: UserAssignedTasksUpdateManyMutationInput;

    @Field(() => UserAssignedTasksWhereInput, {nullable:true})
    @Type(() => UserAssignedTasksWhereInput)
    where?: UserAssignedTasksWhereInput;
}
