import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TaskCountAggregate } from './task-count-aggregate.output';
import { TaskMinAggregate } from './task-min-aggregate.output';
import { TaskMaxAggregate } from './task-max-aggregate.output';

@ObjectType()
export class AggregateTask {

    @Field(() => TaskCountAggregate, {nullable:true})
    _count?: TaskCountAggregate;

    @Field(() => TaskMinAggregate, {nullable:true})
    _min?: TaskMinAggregate;

    @Field(() => TaskMaxAggregate, {nullable:true})
    _max?: TaskMaxAggregate;
}
