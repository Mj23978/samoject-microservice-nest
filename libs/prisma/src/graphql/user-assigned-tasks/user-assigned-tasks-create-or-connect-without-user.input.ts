import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAssignedTasksWhereUniqueInput } from './user-assigned-tasks-where-unique.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksCreateWithoutUserInput } from './user-assigned-tasks-create-without-user.input';

@InputType()
export class UserAssignedTasksCreateOrConnectWithoutUserInput {

    @Field(() => UserAssignedTasksWhereUniqueInput, {nullable:false})
    @Type(() => UserAssignedTasksWhereUniqueInput)
    where!: UserAssignedTasksWhereUniqueInput;

    @Field(() => UserAssignedTasksCreateWithoutUserInput, {nullable:false})
    @Type(() => UserAssignedTasksCreateWithoutUserInput)
    create!: UserAssignedTasksCreateWithoutUserInput;
}
