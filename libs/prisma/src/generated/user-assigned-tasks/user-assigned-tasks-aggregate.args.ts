import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAssignedTasksWhereInput } from './user-assigned-tasks-where.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksOrderByWithRelationInput } from './user-assigned-tasks-order-by-with-relation.input';
import { UserAssignedTasksWhereUniqueInput } from './user-assigned-tasks-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserAssignedTasksCountAggregateInput } from './user-assigned-tasks-count-aggregate.input';
import { UserAssignedTasksMinAggregateInput } from './user-assigned-tasks-min-aggregate.input';
import { UserAssignedTasksMaxAggregateInput } from './user-assigned-tasks-max-aggregate.input';

@ArgsType()
export class UserAssignedTasksAggregateArgs {

    @Field(() => UserAssignedTasksWhereInput, {nullable:true})
    @Type(() => UserAssignedTasksWhereInput)
    where?: UserAssignedTasksWhereInput;

    @Field(() => [UserAssignedTasksOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserAssignedTasksOrderByWithRelationInput>;

    @Field(() => UserAssignedTasksWhereUniqueInput, {nullable:true})
    cursor?: UserAssignedTasksWhereUniqueInput;

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
