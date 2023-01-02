import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SpaceViewCountAggregate } from './space-view-count-aggregate.output';
import { SpaceViewMinAggregate } from './space-view-min-aggregate.output';
import { SpaceViewMaxAggregate } from './space-view-max-aggregate.output';

@ObjectType()
export class AggregateSpaceView {

    @Field(() => SpaceViewCountAggregate, {nullable:true})
    _count?: SpaceViewCountAggregate;

    @Field(() => SpaceViewMinAggregate, {nullable:true})
    _min?: SpaceViewMinAggregate;

    @Field(() => SpaceViewMaxAggregate, {nullable:true})
    _max?: SpaceViewMaxAggregate;
}
