import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class WorkspaceScalarWhereWithAggregatesInput {

    @Field(() => [WorkspaceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WorkspaceScalarWhereWithAggregatesInput>;

    @Field(() => [WorkspaceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WorkspaceScalarWhereWithAggregatesInput>;

    @Field(() => [WorkspaceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WorkspaceScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    settingsId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
