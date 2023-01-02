import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SpaceCountOrderByAggregateInput } from './space-count-order-by-aggregate.input';
import { SpaceMaxOrderByAggregateInput } from './space-max-order-by-aggregate.input';
import { SpaceMinOrderByAggregateInput } from './space-min-order-by-aggregate.input';

@InputType()
export class SpaceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    viewId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    settingsId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    spaceType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chatId?: keyof typeof SortOrder;

    @Field(() => SpaceCountOrderByAggregateInput, {nullable:true})
    _count?: SpaceCountOrderByAggregateInput;

    @Field(() => SpaceMaxOrderByAggregateInput, {nullable:true})
    _max?: SpaceMaxOrderByAggregateInput;

    @Field(() => SpaceMinOrderByAggregateInput, {nullable:true})
    _min?: SpaceMinOrderByAggregateInput;
}
