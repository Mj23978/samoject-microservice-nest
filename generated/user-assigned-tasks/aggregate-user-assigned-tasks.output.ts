import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserAssignedTasksCountAggregate } from './user-assigned-tasks-count-aggregate.output';
import { UserAssignedTasksMinAggregate } from './user-assigned-tasks-min-aggregate.output';
import { UserAssignedTasksMaxAggregate } from './user-assigned-tasks-max-aggregate.output';

@ObjectType()
export class AggregateUserAssignedTasks {

    @Field(() => UserAssignedTasksCountAggregate, {nullable:true})
    _count?: UserAssignedTasksCountAggregate;

    @Field(() => UserAssignedTasksMinAggregate, {nullable:true})
    _min?: UserAssignedTasksMinAggregate;

    @Field(() => UserAssignedTasksMaxAggregate, {nullable:true})
    _max?: UserAssignedTasksMaxAggregate;
}
