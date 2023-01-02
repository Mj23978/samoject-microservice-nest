import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAssignedTasksCreateInput } from './user-assigned-tasks-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserAssignedTasksArgs {

    @Field(() => UserAssignedTasksCreateInput, {nullable:false})
    @Type(() => UserAssignedTasksCreateInput)
    data!: UserAssignedTasksCreateInput;
}
