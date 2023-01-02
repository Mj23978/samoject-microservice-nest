import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectSettingsWhereInput } from './project-settings-where.input';
import { Type } from 'class-transformer';
import { ProjectSettingsOrderByWithAggregationInput } from './project-settings-order-by-with-aggregation.input';
import { ProjectSettingsScalarFieldEnum } from './project-settings-scalar-field.enum';
import { ProjectSettingsScalarWhereWithAggregatesInput } from './project-settings-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProjectSettingsCountAggregateInput } from './project-settings-count-aggregate.input';
import { ProjectSettingsMinAggregateInput } from './project-settings-min-aggregate.input';
import { ProjectSettingsMaxAggregateInput } from './project-settings-max-aggregate.input';

@ArgsType()
export class ProjectSettingsGroupByArgs {

    @Field(() => ProjectSettingsWhereInput, {nullable:true})
    @Type(() => ProjectSettingsWhereInput)
    where?: ProjectSettingsWhereInput;

    @Field(() => [ProjectSettingsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProjectSettingsOrderByWithAggregationInput>;

    @Field(() => [ProjectSettingsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProjectSettingsScalarFieldEnum>;

    @Field(() => ProjectSettingsScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProjectSettingsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProjectSettingsCountAggregateInput, {nullable:true})
    _count?: ProjectSettingsCountAggregateInput;

    @Field(() => ProjectSettingsMinAggregateInput, {nullable:true})
    _min?: ProjectSettingsMinAggregateInput;

    @Field(() => ProjectSettingsMaxAggregateInput, {nullable:true})
    _max?: ProjectSettingsMaxAggregateInput;
}
