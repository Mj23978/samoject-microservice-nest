import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserAssignedTasksCountOrderByAggregateInput } from './user-assigned-tasks-count-order-by-aggregate.input';
import { UserAssignedTasksMaxOrderByAggregateInput } from './user-assigned-tasks-max-order-by-aggregate.input';
import { UserAssignedTasksMinOrderByAggregateInput } from './user-assigned-tasks-min-order-by-aggregate.input';

@InputType()
export class UserAssignedTasksOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedBy?: keyof typeof SortOrder;

    @Field(() => UserAssignedTasksCountOrderByAggregateInput, {nullable:true})
    _count?: UserAssignedTasksCountOrderByAggregateInput;

    @Field(() => UserAssignedTasksMaxOrderByAggregateInput, {nullable:true})
    _max?: UserAssignedTasksMaxOrderByAggregateInput;

    @Field(() => UserAssignedTasksMinOrderByAggregateInput, {nullable:true})
    _min?: UserAssignedTasksMinOrderByAggregateInput;
}
