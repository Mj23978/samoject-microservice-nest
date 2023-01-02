import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { ChatRelationFilter } from '../chat/chat-relation-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';
import { ProjectListRelationFilter } from '../project/project-list-relation-filter.input';
import { ProjectsOnUsersListRelationFilter } from '../projects-on-users/projects-on-users-list-relation-filter.input';
import { TaskListRelationFilter } from '../task/task-list-relation-filter.input';
import { UserAssignedTasksListRelationFilter } from '../user-assigned-tasks/user-assigned-tasks-list-relation-filter.input';
import { WorkspaceRelationFilter } from '../workspace/workspace-relation-filter.input';
import { UserListRelationFilter } from './user-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstname?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastname?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    chatId?: StringNullableFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => ChatRelationFilter, {nullable:true})
    chat?: ChatRelationFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    comments?: MessageListRelationFilter;

    @Field(() => ProjectListRelationFilter, {nullable:true})
    ownedProjects?: ProjectListRelationFilter;

    @Field(() => ProjectsOnUsersListRelationFilter, {nullable:true})
    projects?: ProjectsOnUsersListRelationFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    createdTasks?: TaskListRelationFilter;

    @Field(() => UserAssignedTasksListRelationFilter, {nullable:true})
    assignedTasks?: UserAssignedTasksListRelationFilter;

    @Field(() => WorkspaceRelationFilter, {nullable:true})
    workspaces?: WorkspaceRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    User_B?: UserListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    User_A?: UserListRelationFilter;
}
