import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserAssignedTasksScalarWhereWithAggregatesInput {

    @Field(() => [UserAssignedTasksScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserAssignedTasksScalarWhereWithAggregatesInput>;

    @Field(() => [UserAssignedTasksScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserAssignedTasksScalarWhereWithAggregatesInput>;

    @Field(() => [UserAssignedTasksScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserAssignedTasksScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    taskId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    assignedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    assignedBy?: StringWithAggregatesFilter;
}
