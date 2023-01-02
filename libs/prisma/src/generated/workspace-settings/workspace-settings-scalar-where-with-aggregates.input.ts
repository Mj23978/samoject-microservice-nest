import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class WorkspaceSettingsScalarWhereWithAggregatesInput {

    @Field(() => [WorkspaceSettingsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WorkspaceSettingsScalarWhereWithAggregatesInput>;

    @Field(() => [WorkspaceSettingsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WorkspaceSettingsScalarWhereWithAggregatesInput>;

    @Field(() => [WorkspaceSettingsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WorkspaceSettingsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    localId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    workspaceId?: StringWithAggregatesFilter;
}
