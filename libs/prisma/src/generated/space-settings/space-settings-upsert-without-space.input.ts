import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceSettingsUpdateWithoutSpaceInput } from './space-settings-update-without-space.input';
import { Type } from 'class-transformer';
import { SpaceSettingsCreateWithoutSpaceInput } from './space-settings-create-without-space.input';

@InputType()
export class SpaceSettingsUpsertWithoutSpaceInput {

    @Field(() => SpaceSettingsUpdateWithoutSpaceInput, {nullable:false})
    @Type(() => SpaceSettingsUpdateWithoutSpaceInput)
    update!: SpaceSettingsUpdateWithoutSpaceInput;

    @Field(() => SpaceSettingsCreateWithoutSpaceInput, {nullable:false})
    @Type(() => SpaceSettingsCreateWithoutSpaceInput)
    create!: SpaceSettingsCreateWithoutSpaceInput;
}
