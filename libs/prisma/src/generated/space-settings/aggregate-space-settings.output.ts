import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SpaceSettingsCountAggregate } from './space-settings-count-aggregate.output';
import { SpaceSettingsMinAggregate } from './space-settings-min-aggregate.output';
import { SpaceSettingsMaxAggregate } from './space-settings-max-aggregate.output';

@ObjectType()
export class AggregateSpaceSettings {

    @Field(() => SpaceSettingsCountAggregate, {nullable:true})
    _count?: SpaceSettingsCountAggregate;

    @Field(() => SpaceSettingsMinAggregate, {nullable:true})
    _min?: SpaceSettingsMinAggregate;

    @Field(() => SpaceSettingsMaxAggregate, {nullable:true})
    _max?: SpaceSettingsMaxAggregate;
}
