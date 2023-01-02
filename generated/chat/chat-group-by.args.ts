import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatWhereInput } from './chat-where.input';
import { Type } from 'class-transformer';
import { ChatOrderByWithAggregationInput } from './chat-order-by-with-aggregation.input';
import { ChatScalarFieldEnum } from './chat-scalar-field.enum';
import { ChatScalarWhereWithAggregatesInput } from './chat-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ChatCountAggregateInput } from './chat-count-aggregate.input';
import { ChatMinAggregateInput } from './chat-min-aggregate.input';
import { ChatMaxAggregateInput } from './chat-max-aggregate.input';

@ArgsType()
export class ChatGroupByArgs {

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    where?: ChatWhereInput;

    @Field(() => [ChatOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ChatOrderByWithAggregationInput>;

    @Field(() => [ChatScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ChatScalarFieldEnum>;

    @Field(() => ChatScalarWhereWithAggregatesInput, {nullable:true})
    having?: ChatScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ChatCountAggregateInput, {nullable:true})
    _count?: ChatCountAggregateInput;

    @Field(() => ChatMinAggregateInput, {nullable:true})
    _min?: ChatMinAggregateInput;

    @Field(() => ChatMaxAggregateInput, {nullable:true})
    _max?: ChatMaxAggregateInput;
}
