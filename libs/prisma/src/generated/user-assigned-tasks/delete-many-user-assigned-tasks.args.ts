import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAssignedTasksWhereInput } from './user-assigned-tasks-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserAssignedTasksArgs {

    @Field(() => UserAssignedTasksWhereInput, {nullable:true})
    @Type(() => UserAssignedTasksWhereInput)
    where?: UserAssignedTasksWhereInput;
}
