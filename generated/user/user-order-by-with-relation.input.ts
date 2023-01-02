import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChatOrderByWithRelationInput } from '../chat/chat-order-by-with-relation.input';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { ProjectOrderByRelationAggregateInput } from '../project/project-order-by-relation-aggregate.input';
import { ProjectsOnUsersOrderByRelationAggregateInput } from '../projects-on-users/projects-on-users-order-by-relation-aggregate.input';
import { TaskOrderByRelationAggregateInput } from '../task/task-order-by-relation-aggregate.input';
import { UserAssignedTasksOrderByRelationAggregateInput } from '../user-assigned-tasks/user-assigned-tasks-order-by-relation-aggregate.input';
import { WorkspaceOrderByWithRelationInput } from '../workspace/workspace-order-by-with-relation.input';
import { UserOrderByRelationAggregateInput } from './user-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chatId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => ChatOrderByWithRelationInput, {nullable:true})
    chat?: ChatOrderByWithRelationInput;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    comments?: MessageOrderByRelationAggregateInput;

    @Field(() => ProjectOrderByRelationAggregateInput, {nullable:true})
    ownedProjects?: ProjectOrderByRelationAggregateInput;

    @Field(() => ProjectsOnUsersOrderByRelationAggregateInput, {nullable:true})
    projects?: ProjectsOnUsersOrderByRelationAggregateInput;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    createdTasks?: TaskOrderByRelationAggregateInput;

    @Field(() => UserAssignedTasksOrderByRelationAggregateInput, {nullable:true})
    assignedTasks?: UserAssignedTasksOrderByRelationAggregateInput;

    @Field(() => WorkspaceOrderByWithRelationInput, {nullable:true})
    workspaces?: WorkspaceOrderByWithRelationInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    User_B?: UserOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    User_A?: UserOrderByRelationAggregateInput;
}
