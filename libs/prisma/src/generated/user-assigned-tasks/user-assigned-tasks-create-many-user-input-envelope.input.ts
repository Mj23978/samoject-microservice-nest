import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAssignedTasksCreateManyUserInput } from './user-assigned-tasks-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserAssignedTasksCreateManyUserInputEnvelope {

    @Field(() => [UserAssignedTasksCreateManyUserInput], {nullable:false})
    @Type(() => UserAssignedTasksCreateManyUserInput)
    data!: Array<UserAssignedTasksCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
