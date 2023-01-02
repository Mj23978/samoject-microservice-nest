import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectsOnUsersWhereInput } from './projects-on-users-where.input';
import { Type } from 'class-transformer';
import { ProjectsOnUsersOrderByWithAggregationInput } from './projects-on-users-order-by-with-aggregation.input';
import { ProjectsOnUsersScalarFieldEnum } from './projects-on-users-scalar-field.enum';
import { ProjectsOnUsersScalarWhereWithAggregatesInput } from './projects-on-users-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProjectsOnUsersCountAggregateInput } from './projects-on-users-count-aggregate.input';
import { ProjectsOnUsersMinAggregateInput } from './projects-on-users-min-aggregate.input';
import { ProjectsOnUsersMaxAggregateInput } from './projects-on-users-max-aggregate.input';

@ArgsType()
export class ProjectsOnUsersGroupByArgs {

    @Field(() => ProjectsOnUsersWhereInput, {nullable:true})
    @Type(() => ProjectsOnUsersWhereInput)
    where?: ProjectsOnUsersWhereInput;

    @Field(() => [ProjectsOnUsersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProjectsOnUsersOrderByWithAggregationInput>;

    @Field(() => [ProjectsOnUsersScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProjectsOnUsersScalarFieldEnum>;

    @Field(() => ProjectsOnUsersScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProjectsOnUsersScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProjectsOnUsersCountAggregateInput, {nullable:true})
    _count?: ProjectsOnUsersCountAggregateInput;

    @Field(() => ProjectsOnUsersMinAggregateInput, {nullable:true})
    _min?: ProjectsOnUsersMinAggregateInput;

    @Field(() => ProjectsOnUsersMaxAggregateInput, {nullable:true})
    _max?: ProjectsOnUsersMaxAggregateInput;
}
