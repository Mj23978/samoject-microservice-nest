import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class SpaceViewScalarWhereWithAggregatesInput {

    @Field(() => [SpaceViewScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SpaceViewScalarWhereWithAggregatesInput>;

    @Field(() => [SpaceViewScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SpaceViewScalarWhereWithAggregatesInput>;

    @Field(() => [SpaceViewScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SpaceViewScalarWhereWithAggregatesInput>;

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
