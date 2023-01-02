import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SpaceViewCountOrderByAggregateInput } from './space-view-count-order-by-aggregate.input';
import { SpaceViewMaxOrderByAggregateInput } from './space-view-max-order-by-aggregate.input';
import { SpaceViewMinOrderByAggregateInput } from './space-view-min-order-by-aggregate.input';

@InputType()
export class SpaceViewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    localId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    spaceId?: keyof typeof SortOrder;

    @Field(() => SpaceViewCountOrderByAggregateInput, {nullable:true})
    _count?: SpaceViewCountOrderByAggregateInput;

    @Field(() => SpaceViewMaxOrderByAggregateInput, {nullable:true})
    _max?: SpaceViewMaxOrderByAggregateInput;

    @Field(() => SpaceViewMinOrderByAggregateInput, {nullable:true})
    _min?: SpaceViewMinOrderByAggregateInput;
}
