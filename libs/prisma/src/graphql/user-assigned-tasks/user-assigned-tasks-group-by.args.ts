import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAssignedTasksWhereInput } from './user-assigned-tasks-where.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksOrderByWithAggregationInput } from './user-assigned-tasks-order-by-with-aggregation.input';
import { UserAssignedTasksScalarFieldEnum } from './user-assigned-tasks-scalar-field.enum';
import { UserAssignedTasksScalarWhereWithAggregatesInput } from './user-assigned-tasks-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserAssignedTasksCountAggregateInput } from './user-assigned-tasks-count-aggregate.input';
import { UserAssignedTasksMinAggregateInput } from './user-assigned-tasks-min-aggregate.input';
import { UserAssignedTasksMaxAggregateInput } from './user-assigned-tasks-max-aggregate.input';

@ArgsType()
export class UserAssignedTasksGroupByArgs {

    @Field(() => UserAssignedTasksWhereInput, {nullable:true})
    @Type(() => UserAssignedTasksWhereInput)
    where?: UserAssignedTasksWhereInput;

    @Field(() => [UserAssignedTasksOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserAssignedTasksOrderByWithAggregationInput>;

    @Field(() => [UserAssignedTasksScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserAssignedTasksScalarFieldEnum>;

    @Field(() => UserAssignedTasksScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserAssignedTasksScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserAssignedTasksCountAggregateInput, {nullable:true})
    _count?: UserAssignedTasksCountAggregateInput;

    @Field(() => UserAssignedTasksMinAggregateInput, {nullable:true})
    _min?: UserAssignedTasksMinAggregateInput;

    @Field(() => UserAssignedTasksMaxAggregateInput, {nullable:true})
    _max?: UserAssignedTasksMaxAggregateInput;
}
