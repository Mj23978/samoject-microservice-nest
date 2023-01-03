import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectsOnUsersCountAggregate } from './projects-on-users-count-aggregate.output';
import { ProjectsOnUsersMinAggregate } from './projects-on-users-min-aggregate.output';
import { ProjectsOnUsersMaxAggregate } from './projects-on-users-max-aggregate.output';

@ObjectType()
export class AggregateProjectsOnUsers {

    @Field(() => ProjectsOnUsersCountAggregate, {nullable:true})
    _count?: ProjectsOnUsersCountAggregate;

    @Field(() => ProjectsOnUsersMinAggregate, {nullable:true})
    _min?: ProjectsOnUsersMinAggregate;

    @Field(() => ProjectsOnUsersMaxAggregate, {nullable:true})
    _max?: ProjectsOnUsersMaxAggregate;
}
