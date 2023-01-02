import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAssignedTasksScalarWhereInput } from './user-assigned-tasks-scalar-where.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksUpdateManyMutationInput } from './user-assigned-tasks-update-many-mutation.input';

@InputType()
export class UserAssignedTasksUpdateManyWithWhereWithoutTaskInput {

    @Field(() => UserAssignedTasksScalarWhereInput, {nullable:false})
    @Type(() => UserAssignedTasksScalarWhereInput)
    where!: UserAssignedTasksScalarWhereInput;

    @Field(() => UserAssignedTasksUpdateManyMutationInput, {nullable:false})
    @Type(() => UserAssignedTasksUpdateManyMutationInput)
    data!: UserAssignedTasksUpdateManyMutationInput;
}
