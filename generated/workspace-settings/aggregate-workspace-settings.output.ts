import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkspaceSettingsCountAggregate } from './workspace-settings-count-aggregate.output';
import { WorkspaceSettingsMinAggregate } from './workspace-settings-min-aggregate.output';
import { WorkspaceSettingsMaxAggregate } from './workspace-settings-max-aggregate.output';

@ObjectType()
export class AggregateWorkspaceSettings {

    @Field(() => WorkspaceSettingsCountAggregate, {nullable:true})
    _count?: WorkspaceSettingsCountAggregate;

    @Field(() => WorkspaceSettingsMinAggregate, {nullable:true})
    _min?: WorkspaceSettingsMinAggregate;

    @Field(() => WorkspaceSettingsMaxAggregate, {nullable:true})
    _max?: WorkspaceSettingsMaxAggregate;
}
