import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutAssignedTasksInput } from '../user/user-create-nested-one-without-assigned-tasks.input';

@InputType()
export class UserAssignedTasksCreateWithoutTaskInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => UserCreateNestedOneWithoutAssignedTasksInput, {nullable:false})
    user!: UserCreateNestedOneWithoutAssignedTasksInput;
}
