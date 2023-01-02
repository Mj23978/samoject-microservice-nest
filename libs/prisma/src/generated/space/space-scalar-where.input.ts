import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class SpaceScalarWhereInput {

    @Field(() => [SpaceScalarWhereInput], {nullable:true})
    AND?: Array<SpaceScalarWhereInput>;

    @Field(() => [SpaceScalarWhereInput], {nullable:true})
    OR?: Array<SpaceScalarWhereInput>;

    @Field(() => [SpaceScalarWhereInput], {nullable:true})
    NOT?: Array<SpaceScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    viewId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    projectId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    settingsId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    spaceType?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    parentId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    chatId?: StringNullableFilter;
}
