import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SpaceViewCountAggregate } from './space-view-count-aggregate.output';
import { SpaceViewMinAggregate } from './space-view-min-aggregate.output';
import { SpaceViewMaxAggregate } from './space-view-max-aggregate.output';

@ObjectType()
export class SpaceViewGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    localId!: string;

    @Field(() => String, {nullable:false})
    spaceId!: string;

    @Field(() => SpaceViewCountAggregate, {nullable:true})
    _count?: SpaceViewCountAggregate;

    @Field(() => SpaceViewMinAggregate, {nullable:true})
    _min?: SpaceViewMinAggregate;

    @Field(() => SpaceViewMaxAggregate, {nullable:true})
    _max?: SpaceViewMaxAggregate;
}
