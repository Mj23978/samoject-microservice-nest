import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SpaceSettingsCountAggregate } from './space-settings-count-aggregate.output';
import { SpaceSettingsMinAggregate } from './space-settings-min-aggregate.output';
import { SpaceSettingsMaxAggregate } from './space-settings-max-aggregate.output';

@ObjectType()
export class SpaceSettingsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    localId!: string;

    @Field(() => String, {nullable:false})
    spaceId!: string;

    @Field(() => SpaceSettingsCountAggregate, {nullable:true})
    _count?: SpaceSettingsCountAggregate;

    @Field(() => SpaceSettingsMinAggregate, {nullable:true})
    _min?: SpaceSettingsMinAggregate;

    @Field(() => SpaceSettingsMaxAggregate, {nullable:true})
    _max?: SpaceSettingsMaxAggregate;
}
