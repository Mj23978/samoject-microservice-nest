import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceSettingsWhereInput } from './space-settings-where.input';
import { Type } from 'class-transformer';
import { SpaceSettingsOrderByWithAggregationInput } from './space-settings-order-by-with-aggregation.input';
import { SpaceSettingsScalarFieldEnum } from './space-settings-scalar-field.enum';
import { SpaceSettingsScalarWhereWithAggregatesInput } from './space-settings-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SpaceSettingsCountAggregateInput } from './space-settings-count-aggregate.input';
import { SpaceSettingsMinAggregateInput } from './space-settings-min-aggregate.input';
import { SpaceSettingsMaxAggregateInput } from './space-settings-max-aggregate.input';

@ArgsType()
export class SpaceSettingsGroupByArgs {

    @Field(() => SpaceSettingsWhereInput, {nullable:true})
    @Type(() => SpaceSettingsWhereInput)
    where?: SpaceSettingsWhereInput;

    @Field(() => [SpaceSettingsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SpaceSettingsOrderByWithAggregationInput>;

    @Field(() => [SpaceSettingsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SpaceSettingsScalarFieldEnum>;

    @Field(() => SpaceSettingsScalarWhereWithAggregatesInput, {nullable:true})
    having?: SpaceSettingsScalarWhereWithAggregatesInput;

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
