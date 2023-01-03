import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserAssignedTasksCreateManyUserInput {

    @Field(() => String, {nullable:false})
    taskId!: string;

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;
}
