import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SpaceCountAggregate } from './space-count-aggregate.output';
import { SpaceMinAggregate } from './space-min-aggregate.output';
import { SpaceMaxAggregate } from './space-max-aggregate.output';

@ObjectType()
export class AggregateSpace {

    @Field(() => SpaceCountAggregate, {nullable:true})
    _count?: SpaceCountAggregate;

    @Field(() => SpaceMinAggregate, {nullable:true})
    _min?: SpaceMinAggregate;

    @Field(() => SpaceMaxAggregate, {nullable:true})
    _max?: SpaceMaxAggregate;
}
