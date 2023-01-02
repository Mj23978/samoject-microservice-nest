import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAssignedTasksWhereUniqueInput } from './user-assigned-tasks-where-unique.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksUpdateWithoutUserInput } from './user-assigned-tasks-update-without-user.input';

@InputType()
export class UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserAssignedTasksWhereUniqueInput, {nullable:false})
    @Type(() => UserAssignedTasksWhereUniqueInput)
    where!: UserAssignedTasksWhereUniqueInput;

    @Field(() => UserAssignedTasksUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserAssignedTasksUpdateWithoutUserInput)
    data!: UserAssignedTasksUpdateWithoutUserInput;
}
