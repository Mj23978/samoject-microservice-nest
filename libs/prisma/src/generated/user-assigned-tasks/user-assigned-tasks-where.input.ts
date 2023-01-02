import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { TaskRelationFilter } from '../task/task-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class UserAssignedTasksWhereInput {

    @Field(() => [UserAssignedTasksWhereInput], {nullable:true})
    AND?: Array<UserAssignedTasksWhereInput>;

    @Field(() => [UserAssignedTasksWhereInput], {nullable:true})
    OR?: Array<UserAssignedTasksWhereInput>;

    @Field(() => [UserAssignedTasksWhereInput], {nullable:true})
    NOT?: Array<UserAssignedTasksWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    taskId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    assignedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    assignedBy?: StringFilter;

    @Field(() => TaskRelationFilter, {nullable:true})
    task?: TaskRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
