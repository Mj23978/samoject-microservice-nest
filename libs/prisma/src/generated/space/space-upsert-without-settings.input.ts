import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceUpdateWithoutSettingsInput } from './space-update-without-settings.input';
import { Type } from 'class-transformer';
import { SpaceCreateWithoutSettingsInput } from './space-create-without-settings.input';

@InputType()
export class SpaceUpsertWithoutSettingsInput {

    @Field(() => SpaceUpdateWithoutSettingsInput, {nullable:false})
    @Type(() => SpaceUpdateWithoutSettingsInput)
    update!: SpaceUpdateWithoutSettingsInput;

    @Field(() => SpaceCreateWithoutSettingsInput, {nullable:false})
    @Type(() => SpaceCreateWithoutSettingsInput)
    create!: SpaceCreateWithoutSettingsInput;
}
