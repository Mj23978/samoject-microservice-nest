import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectsOnUsersWhereInput } from '../projects-on-users/projects-on-users-where.input';
import { Type } from 'class-transformer';
import { ProjectsOnUsersOrderByWithRelationInput } from '../projects-on-users/projects-on-users-order-by-with-relation.input';
import { ProjectsOnUsersWhereUniqueInput } from '../projects-on-users/projects-on-users-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectsOnUsersCountAggregateInput } from '../projects-on-users/projects-on-users-count-aggregate.input';
import { ProjectsOnUsersMinAggregateInput } from '../projects-on-users/projects-on-users-min-aggregate.input';
import { ProjectsOnUsersMaxAggregateInput } from '../projects-on-users/projects-on-users-max-aggregate.input';

@ArgsType()
export class ProjectsOnUsersAggregateArgs {

    @Field(() => ProjectsOnUsersWhereInput, {nullable:true})
    @Type(() => ProjectsOnUsersWhereInput)
    where?: ProjectsOnUsersWhereInput;

    @Field(() => [ProjectsOnUsersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectsOnUsersOrderByWithRelationInput>;

    @Field(() => ProjectsOnUsersWhereUniqueInput, {nullable:true})
    cursor?: ProjectsOnUsersWhereUniqueInput;

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
