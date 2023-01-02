import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectOrderByWithAggregationInput } from './project-order-by-with-aggregation.input';
import { ProjectScalarFieldEnum } from './project-scalar-field.enum';
import { ProjectScalarWhereWithAggregatesInput } from './project-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProjectCountAggregateInput } from './project-count-aggregate.input';
import { ProjectMinAggregateInput } from './project-min-aggregate.input';
import { ProjectMaxAggregateInput } from './project-max-aggregate.input';

@ArgsType()
export class ProjectGroupByArgs {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => [ProjectOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProjectOrderByWithAggregationInput>;

    @Field(() => [ProjectScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProjectScalarFieldEnum>;

    @Field(() => ProjectScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProjectScalarWhereWithAggregatesInput;

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
