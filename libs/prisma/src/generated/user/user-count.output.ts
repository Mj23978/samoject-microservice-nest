import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    comments?: number;

    @Field(() => Int, {nullable:false})
    ownedProjects?: number;

    @Field(() => Int, {nullable:false})
    projects?: number;

    @Field(() => Int, {nullable:false})
    createdTasks?: number;

    @Field(() => Int, {nullable:false})
    assignedTasks?: number;

    @Field(() => Int, {nullable:false})
    User_B?: number;

    @Field(() => Int, {nullable:false})
    User_A?: number;
}
