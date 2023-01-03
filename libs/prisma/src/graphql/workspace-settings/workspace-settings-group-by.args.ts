import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceSettingsWhereInput } from './workspace-settings-where.input';
import { Type } from 'class-transformer';
import { WorkspaceSettingsOrderByWithAggregationInput } from './workspace-settings-order-by-with-aggregation.input';
import { WorkspaceSettingsScalarFieldEnum } from './workspace-settings-scalar-field.enum';
import { WorkspaceSettingsScalarWhereWithAggregatesInput } from './workspace-settings-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WorkspaceSettingsCountAggregateInput } from './workspace-settings-count-aggregate.input';
import { WorkspaceSettingsMinAggregateInput } from './workspace-settings-min-aggregate.input';
import { WorkspaceSettingsMaxAggregateInput } from './workspace-settings-max-aggregate.input';

@ArgsType()
export class WorkspaceSettingsGroupByArgs {

    @Field(() => WorkspaceSettingsWhereInput, {nullable:true})
    @Type(() => WorkspaceSettingsWhereInput)
    where?: WorkspaceSettingsWhereInput;

    @Field(() => [WorkspaceSettingsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WorkspaceSettingsOrderByWithAggregationInput>;

    @Field(() => [WorkspaceSettingsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WorkspaceSettingsScalarFieldEnum>;

    @Field(() => WorkspaceSettingsScalarWhereWithAggregatesInput, {nullable:true})
    having?: WorkspaceSettingsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WorkspaceSettingsCountAggregateInput, {nullable:true})
    _count?: WorkspaceSettingsCountAggregateInput;

    @Field(() => WorkspaceSettingsMinAggregateInput, {nullable:true})
    _min?: WorkspaceSettingsMinAggregateInput;

    @Field(() => WorkspaceSettingsMaxAggregateInput, {nullable:true})
    _max?: WorkspaceSettingsMaxAggregateInput;
}
