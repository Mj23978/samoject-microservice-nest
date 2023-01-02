import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserAssignedTasksScalarWhereInput {

    @Field(() => [UserAssignedTasksScalarWhereInput], {nullable:true})
    AND?: Array<UserAssignedTasksScalarWhereInput>;

    @Field(() => [UserAssignedTasksScalarWhereInput], {nullable:true})
    OR?: Array<UserAssignedTasksScalarWhereInput>;

    @Field(() => [UserAssignedTasksScalarWhereInput], {nullable:true})
    NOT?: Array<UserAssignedTasksScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    taskId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    assignedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    assignedBy?: StringFilter;
}
