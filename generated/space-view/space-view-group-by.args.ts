import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceViewWhereInput } from './space-view-where.input';
import { Type } from 'class-transformer';
import { SpaceViewOrderByWithAggregationInput } from './space-view-order-by-with-aggregation.input';
import { SpaceViewScalarFieldEnum } from './space-view-scalar-field.enum';
import { SpaceViewScalarWhereWithAggregatesInput } from './space-view-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SpaceViewCountAggregateInput } from './space-view-count-aggregate.input';
import { SpaceViewMinAggregateInput } from './space-view-min-aggregate.input';
import { SpaceViewMaxAggregateInput } from './space-view-max-aggregate.input';

@ArgsType()
export class SpaceViewGroupByArgs {

    @Field(() => SpaceViewWhereInput, {nullable:true})
    @Type(() => SpaceViewWhereInput)
    where?: SpaceViewWhereInput;

    @Field(() => [SpaceViewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SpaceViewOrderByWithAggregationInput>;

    @Field(() => [SpaceViewScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SpaceViewScalarFieldEnum>;

    @Field(() => SpaceViewScalarWhereWithAggregatesInput, {nullable:true})
    having?: SpaceViewScalarWhereWithAggregatesInput;

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
