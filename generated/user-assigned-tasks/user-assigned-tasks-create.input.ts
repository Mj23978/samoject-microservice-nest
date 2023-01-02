import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateNestedOneWithoutAssignesInput } from '../task/task-create-nested-one-without-assignes.input';
import { UserCreateNestedOneWithoutAssignedTasksInput } from '../user/user-create-nested-one-without-assigned-tasks.input';

@InputType()
export class UserAssignedTasksCreateInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => TaskCreateNestedOneWithoutAssignesInput, {nullable:false})
    task!: TaskCreateNestedOneWithoutAssignesInput;

    @Field(() => UserCreateNestedOneWithoutAssignedTasksInput, {nullable:false})
    user!: UserCreateNestedOneWithoutAssignedTasksInput;
}
