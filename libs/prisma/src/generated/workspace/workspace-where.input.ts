import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { WorkspaceSettingsRelationFilter } from '../workspace-settings/workspace-settings-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ProjectListRelationFilter } from '../project/project-list-relation-filter.input';

@InputType()
export class WorkspaceWhereInput {

    @Field(() => [WorkspaceWhereInput], {nullable:true})
    AND?: Array<WorkspaceWhereInput>;

    @Field(() => [WorkspaceWhereInput], {nullable:true})
    OR?: Array<WorkspaceWhereInput>;

    @Field(() => [WorkspaceWhereInput], {nullable:true})
    NOT?: Array<WorkspaceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    settingsId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => WorkspaceSettingsRelationFilter, {nullable:true})
    settings?: WorkspaceSettingsRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ProjectListRelationFilter, {nullable:true})
    projects?: ProjectListRelationFilter;
}
