import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SpaceSettingsCountOrderByAggregateInput } from './space-settings-count-order-by-aggregate.input';
import { SpaceSettingsMaxOrderByAggregateInput } from './space-settings-max-order-by-aggregate.input';
import { SpaceSettingsMinOrderByAggregateInput } from './space-settings-min-order-by-aggregate.input';

@InputType()
export class SpaceSettingsOrderByWithAggregationInput {

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

    @Field(() => SpaceSettingsCountOrderByAggregateInput, {nullable:true})
    _count?: SpaceSettingsCountOrderByAggregateInput;

    @Field(() => SpaceSettingsMaxOrderByAggregateInput, {nullable:true})
    _max?: SpaceSettingsMaxOrderByAggregateInput;

    @Field(() => SpaceSettingsMinOrderByAggregateInput, {nullable:true})
    _min?: SpaceSettingsMinOrderByAggregateInput;
}
