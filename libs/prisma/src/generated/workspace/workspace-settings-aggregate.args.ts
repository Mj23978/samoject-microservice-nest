import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceSettingsWhereInput } from '../workspace-settings/workspace-settings-where.input';
import { Type } from 'class-transformer';
import { WorkspaceSettingsOrderByWithRelationInput } from '../workspace-settings/workspace-settings-order-by-with-relation.input';
import { WorkspaceSettingsWhereUniqueInput } from '../workspace-settings/workspace-settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkspaceSettingsCountAggregateInput } from '../workspace-settings/workspace-settings-count-aggregate.input';
import { WorkspaceSettingsMinAggregateInput } from '../workspace-settings/workspace-settings-min-aggregate.input';
import { WorkspaceSettingsMaxAggregateInput } from '../workspace-settings/workspace-settings-max-aggregate.input';

@ArgsType()
export class WorkspaceSettingsAggregateArgs {

    @Field(() => WorkspaceSettingsWhereInput, {nullable:true})
    @Type(() => WorkspaceSettingsWhereInput)
    where?: WorkspaceSettingsWhereInput;

    @Field(() => [WorkspaceSettingsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkspaceSettingsOrderByWithRelationInput>;

    @Field(() => WorkspaceSettingsWhereUniqueInput, {nullable:true})
    cursor?: WorkspaceSettingsWhereUniqueInput;

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
