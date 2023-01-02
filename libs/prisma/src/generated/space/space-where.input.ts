import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ChatRelationFilter } from '../chat/chat-relation-filter.input';
import { SpaceRelationFilter } from './space-relation-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';
import { SpaceSettingsRelationFilter } from '../space-settings/space-settings-relation-filter.input';
import { SpaceViewRelationFilter } from '../space-view/space-view-relation-filter.input';
import { SpaceListRelationFilter } from './space-list-relation-filter.input';

@InputType()
export class SpaceWhereInput {

    @Field(() => [SpaceWhereInput], {nullable:true})
    AND?: Array<SpaceWhereInput>;

    @Field(() => [SpaceWhereInput], {nullable:true})
    OR?: Array<SpaceWhereInput>;

    @Field(() => [SpaceWhereInput], {nullable:true})
    NOT?: Array<SpaceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    viewId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    projectId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    settingsId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    spaceType?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    parentId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    chatId?: StringNullableFilter;

    @Field(() => ChatRelationFilter, {nullable:true})
    chat?: ChatRelationFilter;

    @Field(() => SpaceRelationFilter, {nullable:true})
    parent?: SpaceRelationFilter;

    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: ProjectRelationFilter;

    @Field(() => SpaceSettingsRelationFilter, {nullable:true})
    settings?: SpaceSettingsRelationFilter;

    @Field(() => SpaceViewRelationFilter, {nullable:true})
    view?: SpaceViewRelationFilter;

    @Field(() => SpaceListRelationFilter, {nullable:true})
    subspaces?: SpaceListRelationFilter;
}
