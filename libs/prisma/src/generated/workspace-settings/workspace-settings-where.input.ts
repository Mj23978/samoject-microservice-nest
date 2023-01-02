import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { WorkspaceRelationFilter } from '../workspace/workspace-relation-filter.input';

@InputType()
export class WorkspaceSettingsWhereInput {

    @Field(() => [WorkspaceSettingsWhereInput], {nullable:true})
    AND?: Array<WorkspaceSettingsWhereInput>;

    @Field(() => [WorkspaceSettingsWhereInput], {nullable:true})
    OR?: Array<WorkspaceSettingsWhereInput>;

    @Field(() => [WorkspaceSettingsWhereInput], {nullable:true})
    NOT?: Array<WorkspaceSettingsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    localId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    workspaceId?: StringFilter;

    @Field(() => WorkspaceRelationFilter, {nullable:true})
    workspace?: WorkspaceRelationFilter;
}
