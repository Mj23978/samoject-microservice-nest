import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ChatRelationFilter } from '../chat/chat-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ProjectSettingsRelationFilter } from '../project-settings/project-settings-relation-filter.input';
import { WorkspaceRelationFilter } from '../workspace/workspace-relation-filter.input';
import { ProjectsOnUsersListRelationFilter } from '../projects-on-users/projects-on-users-list-relation-filter.input';
import { SpaceListRelationFilter } from '../space/space-list-relation-filter.input';
import { TaskListRelationFilter } from '../task/task-list-relation-filter.input';

@InputType()
export class ProjectWhereInput {

    @Field(() => [ProjectWhereInput], {nullable:true})
    AND?: Array<ProjectWhereInput>;

    @Field(() => [ProjectWhereInput], {nullable:true})
    OR?: Array<ProjectWhereInput>;

    @Field(() => [ProjectWhereInput], {nullable:true})
    NOT?: Array<ProjectWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    settingsId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    workspaceId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ownerId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    chatId?: StringNullableFilter;

    @Field(() => ChatRelationFilter, {nullable:true})
    chat?: ChatRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    owner?: UserRelationFilter;

    @Field(() => ProjectSettingsRelationFilter, {nullable:true})
    settings?: ProjectSettingsRelationFilter;

    @Field(() => WorkspaceRelationFilter, {nullable:true})
    workspace?: WorkspaceRelationFilter;

    @Field(() => ProjectsOnUsersListRelationFilter, {nullable:true})
    users?: ProjectsOnUsersListRelationFilter;

    @Field(() => SpaceListRelationFilter, {nullable:true})
    spaces?: SpaceListRelationFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    tasks?: TaskListRelationFilter;
}
