import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceSettingsWhereUniqueInput } from './space-settings-where-unique.input';
import { Type } from 'class-transformer';
import { SpaceSettingsCreateInput } from './space-settings-create.input';
import { SpaceSettingsUpdateInput } from './space-settings-update.input';

@ArgsType()
export class UpsertOneSpaceSettingsArgs {

    @Field(() => SpaceSettingsWhereUniqueInput, {nullable:false})
    @Type(() => SpaceSettingsWhereUniqueInput)
    where!: SpaceSettingsWhereUniqueInput;

    @Field(() => SpaceSettingsCreateInput, {nullable:false})
    @Type(() => SpaceSettingsCreateInput)
    create!: SpaceSettingsCreateInput;

    @Field(() => SpaceSettingsUpdateInput, {nullable:false})
    @Type(() => SpaceSettingsUpdateInput)
    update!: SpaceSettingsUpdateInput;
}
