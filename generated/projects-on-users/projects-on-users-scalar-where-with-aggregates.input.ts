import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProjectsOnUsersScalarWhereWithAggregatesInput {

    @Field(() => [ProjectsOnUsersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProjectsOnUsersScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectsOnUsersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProjectsOnUsersScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectsOnUsersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProjectsOnUsersScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    projectId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    assignedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    assignedBy?: StringWithAggregatesFilter;
}
