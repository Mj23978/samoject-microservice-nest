import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateNestedOneWithoutAssignesInput } from '../task/task-create-nested-one-without-assignes.input';

@InputType()
export class UserAssignedTasksCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => TaskCreateNestedOneWithoutAssignesInput, {nullable:false})
    task!: TaskCreateNestedOneWithoutAssignesInput;
}
