import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SpaceRelationFilter } from '../space/space-relation-filter.input';

@InputType()
export class SpaceViewWhereInput {

    @Field(() => [SpaceViewWhereInput], {nullable:true})
    AND?: Array<SpaceViewWhereInput>;

    @Field(() => [SpaceViewWhereInput], {nullable:true})
    OR?: Array<SpaceViewWhereInput>;

    @Field(() => [SpaceViewWhereInput], {nullable:true})
    NOT?: Array<SpaceViewWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    localId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    spaceId?: StringFilter;

    @Field(() => SpaceRelationFilter, {nullable:true})
    space?: SpaceRelationFilter;
}
