import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChatOrderByWithRelationInput } from '../chat/chat-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ProjectSettingsOrderByWithRelationInput } from '../project-settings/project-settings-order-by-with-relation.input';
import { WorkspaceOrderByWithRelationInput } from '../workspace/workspace-order-by-with-relation.input';
import { ProjectsOnUsersOrderByRelationAggregateInput } from '../projects-on-users/projects-on-users-order-by-relation-aggregate.input';
import { SpaceOrderByRelationAggregateInput } from '../space/space-order-by-relation-aggregate.input';
import { TaskOrderByRelationAggregateInput } from '../task/task-order-by-relation-aggregate.input';

@InputType()
export class ProjectOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    settingsId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workspaceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chatId?: keyof typeof SortOrder;

    @Field(() => ChatOrderByWithRelationInput, {nullable:true})
    chat?: ChatOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    owner?: UserOrderByWithRelationInput;

    @Field(() => ProjectSettingsOrderByWithRelationInput, {nullable:true})
    settings?: ProjectSettingsOrderByWithRelationInput;

    @Field(() => WorkspaceOrderByWithRelationInput, {nullable:true})
    workspace?: WorkspaceOrderByWithRelationInput;

    @Field(() => ProjectsOnUsersOrderByRelationAggregateInput, {nullable:true})
    users?: ProjectsOnUsersOrderByRelationAggregateInput;

    @Field(() => SpaceOrderByRelationAggregateInput, {nullable:true})
    spaces?: SpaceOrderByRelationAggregateInput;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    tasks?: TaskOrderByRelationAggregateInput;
}
