import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TaskCountAggregate } from './task-count-aggregate.output';
import { TaskMinAggregate } from './task-min-aggregate.output';
import { TaskMaxAggregate } from './task-max-aggregate.output';

@ObjectType()
export class TaskGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    projectId?: string;

    @Field(() => String, {nullable:true})
    creatorId?: string;

    @Field(() => String, {nullable:true})
    parentId?: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:false})
    details!: string;

    @Field(() => String, {nullable:true})
    chatId?: string;

    @Field(() => TaskCountAggregate, {nullable:true})
    _count?: TaskCountAggregate;

    @Field(() => TaskMinAggregate, {nullable:true})
    _min?: TaskMinAggregate;

    @Field(() => TaskMaxAggregate, {nullable:true})
    _max?: TaskMaxAggregate;
}
