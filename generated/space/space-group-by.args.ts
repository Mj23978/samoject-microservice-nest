import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceWhereInput } from './space-where.input';
import { Type } from 'class-transformer';
import { SpaceOrderByWithAggregationInput } from './space-order-by-with-aggregation.input';
import { SpaceScalarFieldEnum } from './space-scalar-field.enum';
import { SpaceScalarWhereWithAggregatesInput } from './space-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SpaceCountAggregateInput } from './space-count-aggregate.input';
import { SpaceMinAggregateInput } from './space-min-aggregate.input';
import { SpaceMaxAggregateInput } from './space-max-aggregate.input';

@ArgsType()
export class SpaceGroupByArgs {

    @Field(() => SpaceWhereInput, {nullable:true})
    @Type(() => SpaceWhereInput)
    where?: SpaceWhereInput;

    @Field(() => [SpaceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SpaceOrderByWithAggregationInput>;

    @Field(() => [SpaceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SpaceScalarFieldEnum>;

    @Field(() => SpaceScalarWhereWithAggregatesInput, {nullable:true})
    having?: SpaceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SpaceCountAggregateInput, {nullable:true})
    _count?: SpaceCountAggregateInput;

    @Field(() => SpaceMinAggregateInput, {nullable:true})
    _min?: SpaceMinAggregateInput;

    @Field(() => SpaceMaxAggregateInput, {nullable:true})
    _max?: SpaceMaxAggregateInput;
}
