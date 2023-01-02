import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TaskCount {

    @Field(() => Int, {nullable:false})
    subTasks?: number;

    @Field(() => Int, {nullable:false})
    assignes?: number;
}
