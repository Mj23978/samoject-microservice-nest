import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChatOrderByWithRelationInput } from '../chat/chat-order-by-with-relation.input';
import { ProjectOrderByWithRelationInput } from '../project/project-order-by-with-relation.input';
import { SpaceSettingsOrderByWithRelationInput } from '../space-settings/space-settings-order-by-with-relation.input';
import { SpaceViewOrderByWithRelationInput } from '../space-view/space-view-order-by-with-relation.input';
import { SpaceOrderByRelationAggregateInput } from './space-order-by-relation-aggregate.input';

@InputType()
export class SpaceOrderByWithRelationInput {

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

    @Field(() => ChatOrderByWithRelationInput, {nullable:true})
    chat?: ChatOrderByWithRelationInput;

    @Field(() => SpaceOrderByWithRelationInput, {nullable:true})
    parent?: SpaceOrderByWithRelationInput;

    @Field(() => ProjectOrderByWithRelationInput, {nullable:true})
    project?: ProjectOrderByWithRelationInput;

    @Field(() => SpaceSettingsOrderByWithRelationInput, {nullable:true})
    settings?: SpaceSettingsOrderByWithRelationInput;

    @Field(() => SpaceViewOrderByWithRelationInput, {nullable:true})
    view?: SpaceViewOrderByWithRelationInput;

    @Field(() => SpaceOrderByRelationAggregateInput, {nullable:true})
    subspaces?: SpaceOrderByRelationAggregateInput;
}
