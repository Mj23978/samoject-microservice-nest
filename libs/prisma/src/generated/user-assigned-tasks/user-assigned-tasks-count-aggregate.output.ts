import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserAssignedTasksCountAggregate {

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    assignedAt!: number;

    @Field(() => Int, {nullable:false})
    assignedBy!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
