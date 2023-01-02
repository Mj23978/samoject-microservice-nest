import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAssignedTasksWhereUniqueInput } from './user-assigned-tasks-where-unique.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksUpdateWithoutUserInput } from './user-assigned-tasks-update-without-user.input';
import { UserAssignedTasksCreateWithoutUserInput } from './user-assigned-tasks-create-without-user.input';

@InputType()
export class UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserAssignedTasksWhereUniqueInput, {nullable:false})
    @Type(() => UserAssignedTasksWhereUniqueInput)
    where!: UserAssignedTasksWhereUniqueInput;

    @Field(() => UserAssignedTasksUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserAssignedTasksUpdateWithoutUserInput)
    update!: UserAssignedTasksUpdateWithoutUserInput;

    @Field(() => UserAssignedTasksCreateWithoutUserInput, {nullable:false})
    @Type(() => UserAssignedTasksCreateWithoutUserInput)
    create!: UserAssignedTasksCreateWithoutUserInput;
}
