import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatWhereInput } from './chat-where.input';
import { Type } from 'class-transformer';
import { ChatOrderByWithRelationInput } from './chat-order-by-with-relation.input';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChatCountAggregateInput } from './chat-count-aggregate.input';
import { ChatMinAggregateInput } from './chat-min-aggregate.input';
import { ChatMaxAggregateInput } from './chat-max-aggregate.input';

@ArgsType()
export class ChatAggregateArgs {

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    where?: ChatWhereInput;

    @Field(() => [ChatOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChatOrderByWithRelationInput>;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    cursor?: ChatWhereUniqueInput;

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
