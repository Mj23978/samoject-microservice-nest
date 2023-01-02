import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WorkspaceSettingsCountOrderByAggregateInput } from './workspace-settings-count-order-by-aggregate.input';
import { WorkspaceSettingsMaxOrderByAggregateInput } from './workspace-settings-max-order-by-aggregate.input';
import { WorkspaceSettingsMinOrderByAggregateInput } from './workspace-settings-min-order-by-aggregate.input';

@InputType()
export class WorkspaceSettingsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    localId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workspaceId?: keyof typeof SortOrder;

    @Field(() => WorkspaceSettingsCountOrderByAggregateInput, {nullable:true})
    _count?: WorkspaceSettingsCountOrderByAggregateInput;

    @Field(() => WorkspaceSettingsMaxOrderByAggregateInput, {nullable:true})
    _max?: WorkspaceSettingsMaxOrderByAggregateInput;

    @Field(() => WorkspaceSettingsMinOrderByAggregateInput, {nullable:true})
    _min?: WorkspaceSettingsMinOrderByAggregateInput;
}
