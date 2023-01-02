import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceSettingsWhereInput } from './space-settings-where.input';
import { Type } from 'class-transformer';
import { SpaceSettingsOrderByWithRelationInput } from './space-settings-order-by-with-relation.input';
import { SpaceSettingsWhereUniqueInput } from './space-settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SpaceSettingsScalarFieldEnum } from './space-settings-scalar-field.enum';

@ArgsType()
export class FindFirstSpaceSettingsArgs {

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

    @Field(() => [SpaceSettingsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SpaceSettingsScalarFieldEnum>;
}
