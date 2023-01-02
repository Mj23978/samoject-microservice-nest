import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectOrderByWithRelationInput } from './project-order-by-with-relation.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectCountAggregateInput } from './project-count-aggregate.input';
import { ProjectMinAggregateInput } from './project-min-aggregate.input';
import { ProjectMaxAggregateInput } from './project-max-aggregate.input';

@ArgsType()
export class ProjectAggregateArgs {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => [ProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectOrderByWithRelationInput>;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    cursor?: ProjectWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProjectCountAggregateInput, {nullable:true})
    _count?: ProjectCountAggregateInput;

    @Field(() => ProjectMinAggregateInput, {nullable:true})
    _min?: ProjectMinAggregateInput;

    @Field(() => ProjectMaxAggregateInput, {nullable:true})
    _max?: ProjectMaxAggregateInput;
}
