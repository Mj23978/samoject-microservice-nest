import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChatCountOrderByAggregateInput } from './chat-count-order-by-aggregate.input';
import { ChatMaxOrderByAggregateInput } from './chat-max-order-by-aggregate.input';
import { ChatMinOrderByAggregateInput } from './chat-min-order-by-aggregate.input';

@InputType()
export class ChatOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ChatCountOrderByAggregateInput, {nullable:true})
    _count?: ChatCountOrderByAggregateInput;

    @Field(() => ChatMaxOrderByAggregateInput, {nullable:true})
    _max?: ChatMaxOrderByAggregateInput;

    @Field(() => ChatMinOrderByAggregateInput, {nullable:true})
    _min?: ChatMinOrderByAggregateInput;
}
