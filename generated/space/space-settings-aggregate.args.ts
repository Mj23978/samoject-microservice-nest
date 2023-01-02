import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceSettingsWhereInput } from '../space-settings/space-settings-where.input';
import { Type } from 'class-transformer';
import { SpaceSettingsOrderByWithRelationInput } from '../space-settings/space-settings-order-by-with-relation.input';
import { SpaceSettingsWhereUniqueInput } from '../space-settings/space-settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SpaceSettingsCountAggregateInput } from '../space-settings/space-settings-count-aggregate.input';
import { SpaceSettingsMinAggregateInput } from '../space-settings/space-settings-min-aggregate.input';
import { SpaceSettingsMaxAggregateInput } from '../space-settings/space-settings-max-aggregate.input';

@ArgsType()
export class SpaceSettingsAggregateArgs {

    @Field(() => SpaceSettingsWhereInput, {nullable:true})
    @Type(() => SpaceSettingsWhereInput)
    where?: SpaceSettingsWhereInput;

    @Field(() => [SpaceSettingsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SpaceSettingsOrderByWithRelationInput>;

    @Field(() => SpaceSettingsWhereUniqueInput, {nullable:true})
    cursor?: SpaceSettingsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SpaceSettingsCountAggregateInput, {nullable:true})
    _count?: SpaceSettingsCountAggregateInput;

    @Field(() => SpaceSettingsMinAggregateInput, {nullable:true})
    _min?: SpaceSettingsMinAggregateInput;

    @Field(() => SpaceSettingsMaxAggregateInput, {nullable:true})
    _max?: SpaceSettingsMaxAggregateInput;
}
