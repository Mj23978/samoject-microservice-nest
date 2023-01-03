import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceWhereInput } from './space-where.input';
import { Type } from 'class-transformer';
import { SpaceOrderByWithRelationInput } from './space-order-by-with-relation.input';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SpaceCountAggregateInput } from './space-count-aggregate.input';
import { SpaceMinAggregateInput } from './space-min-aggregate.input';
import { SpaceMaxAggregateInput } from './space-max-aggregate.input';

@ArgsType()
export class SpaceAggregateArgs {

    @Field(() => SpaceWhereInput, {nullable:true})
    @Type(() => SpaceWhereInput)
    where?: SpaceWhereInput;

    @Field(() => [SpaceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SpaceOrderByWithRelationInput>;

    @Field(() => SpaceWhereUniqueInput, {nullable:true})
    cursor?: SpaceWhereUniqueInput;

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
