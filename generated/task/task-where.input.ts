import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ChatRelationFilter } from '../chat/chat-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { TaskRelationFilter } from './task-relation-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';
import { TaskListRelationFilter } from './task-list-relation-filter.input';
import { UserAssignedTasksListRelationFilter } from '../user-assigned-tasks/user-assigned-tasks-list-relation-filter.input';

@InputType()
export class TaskWhereInput {

    @Field(() => [TaskWhereInput], {nullable:true})
    AND?: Array<TaskWhereInput>;

    @Field(() => [TaskWhereInput], {nullable:true})
    OR?: Array<TaskWhereInput>;

    @Field(() => [TaskWhereInput], {nullable:true})
    NOT?: Array<TaskWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    projectId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    creatorId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    parentId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    details?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    chatId?: StringNullableFilter;

    @Field(() => ChatRelationFilter, {nullable:true})
    chat?: ChatRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    creator?: UserRelationFilter;

    @Field(() => TaskRelationFilter, {nullable:true})
    parent?: TaskRelationFilter;

    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: ProjectRelationFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    subTasks?: TaskListRelationFilter;

    @Field(() => UserAssignedTasksListRelationFilter, {nullable:true})
    assignes?: UserAssignedTasksListRelationFilter;
}
