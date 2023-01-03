import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceViewWhereInput } from './space-view-where.input';
import { Type } from 'class-transformer';
import { SpaceViewOrderByWithRelationInput } from './space-view-order-by-with-relation.input';
import { SpaceViewWhereUniqueInput } from './space-view-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SpaceViewCountAggregateInput } from './space-view-count-aggregate.input';
import { SpaceViewMinAggregateInput } from './space-view-min-aggregate.input';
import { SpaceViewMaxAggregateInput } from './space-view-max-aggregate.input';

@ArgsType()
export class SpaceViewAggregateArgs {

    @Field(() => SpaceViewWhereInput, {nullable:true})
    @Type(() => SpaceViewWhereInput)
    where?: SpaceViewWhereInput;

    @Field(() => [SpaceViewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SpaceViewOrderByWithRelationInput>;

    @Field(() => SpaceViewWhereUniqueInput, {nullable:true})
    cursor?: SpaceViewWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SpaceViewCountAggregateInput, {nullable:true})
    _count?: SpaceViewCountAggregateInput;

    @Field(() => SpaceViewMinAggregateInput, {nullable:true})
    _min?: SpaceViewMinAggregateInput;

    @Field(() => SpaceViewMaxAggregateInput, {nullable:true})
    _max?: SpaceViewMaxAggregateInput;
}
