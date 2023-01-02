import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WorkspaceSettingsOrderByWithRelationInput } from '../workspace-settings/workspace-settings-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ProjectOrderByRelationAggregateInput } from '../project/project-order-by-relation-aggregate.input';

@InputType()
export class WorkspaceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    settingsId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => WorkspaceSettingsOrderByWithRelationInput, {nullable:true})
    settings?: WorkspaceSettingsOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => ProjectOrderByRelationAggregateInput, {nullable:true})
    projects?: ProjectOrderByRelationAggregateInput;
}
