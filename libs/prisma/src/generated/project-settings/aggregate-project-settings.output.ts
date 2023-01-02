import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectSettingsCountAggregate } from './project-settings-count-aggregate.output';
import { ProjectSettingsMinAggregate } from './project-settings-min-aggregate.output';
import { ProjectSettingsMaxAggregate } from './project-settings-max-aggregate.output';

@ObjectType()
export class AggregateProjectSettings {

    @Field(() => ProjectSettingsCountAggregate, {nullable:true})
    _count?: ProjectSettingsCountAggregate;

    @Field(() => ProjectSettingsMinAggregate, {nullable:true})
    _min?: ProjectSettingsMinAggregate;

    @Field(() => ProjectSettingsMaxAggregate, {nullable:true})
    _max?: ProjectSettingsMaxAggregate;
}
