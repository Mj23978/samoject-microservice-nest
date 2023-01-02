import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class SpaceSettingsScalarWhereWithAggregatesInput {

    @Field(() => [SpaceSettingsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SpaceSettingsScalarWhereWithAggregatesInput>;

    @Field(() => [SpaceSettingsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SpaceSettingsScalarWhereWithAggregatesInput>;

    @Field(() => [SpaceSettingsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SpaceSettingsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    localId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    spaceId?: StringWithAggregatesFilter;
}
