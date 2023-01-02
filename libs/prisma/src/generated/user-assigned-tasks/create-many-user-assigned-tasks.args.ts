import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAssignedTasksCreateManyInput } from './user-assigned-tasks-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserAssignedTasksArgs {

    @Field(() => [UserAssignedTasksCreateManyInput], {nullable:false})
    @Type(() => UserAssignedTasksCreateManyInput)
    data!: Array<UserAssignedTasksCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
