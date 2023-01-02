import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectSettingsWhereInput } from '../project-settings/project-settings-where.input';
import { Type } from 'class-transformer';
import { ProjectSettingsOrderByWithRelationInput } from '../project-settings/project-settings-order-by-with-relation.input';
import { ProjectSettingsWhereUniqueInput } from '../project-settings/project-settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectSettingsCountAggregateInput } from '../project-settings/project-settings-count-aggregate.input';
import { ProjectSettingsMinAggregateInput } from '../project-settings/project-settings-min-aggregate.input';
import { ProjectSettingsMaxAggregateInput } from '../project-settings/project-settings-max-aggregate.input';

@ArgsType()
export class ProjectSettingsAggregateArgs {

    @Field(() => ProjectSettingsWhereInput, {nullable:true})
    @Type(() => ProjectSettingsWhereInput)
    where?: ProjectSettingsWhereInput;

    @Field(() => [ProjectSettingsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectSettingsOrderByWithRelationInput>;

    @Field(() => ProjectSettingsWhereUniqueInput, {nullable:true})
    cursor?: ProjectSettingsWhereUniqueInput;

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
