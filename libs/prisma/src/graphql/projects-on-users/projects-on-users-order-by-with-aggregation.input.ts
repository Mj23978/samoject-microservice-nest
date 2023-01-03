import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProjectsOnUsersCountOrderByAggregateInput } from './projects-on-users-count-order-by-aggregate.input';
import { ProjectsOnUsersMaxOrderByAggregateInput } from './projects-on-users-max-order-by-aggregate.input';
import { ProjectsOnUsersMinOrderByAggregateInput } from './projects-on-users-min-order-by-aggregate.input';

@InputType()
export class ProjectsOnUsersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedBy?: keyof typeof SortOrder;

    @Field(() => ProjectsOnUsersCountOrderByAggregateInput, {nullable:true})
    _count?: ProjectsOnUsersCountOrderByAggregateInput;

    @Field(() => ProjectsOnUsersMaxOrderByAggregateInput, {nullable:true})
    _max?: ProjectsOnUsersMaxOrderByAggregateInput;

    @Field(() => ProjectsOnUsersMinOrderByAggregateInput, {nullable:true})
    _min?: ProjectsOnUsersMinOrderByAggregateInput;
}
