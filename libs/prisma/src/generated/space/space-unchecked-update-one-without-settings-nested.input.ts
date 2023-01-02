import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceCreateWithoutSettingsInput } from './space-create-without-settings.input';
import { Type } from 'class-transformer';
import { SpaceCreateOrConnectWithoutSettingsInput } from './space-create-or-connect-without-settings.input';
import { SpaceUpsertWithoutSettingsInput } from './space-upsert-without-settings.input';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { SpaceUpdateWithoutSettingsInput } from './space-update-without-settings.input';

@InputType()
export class SpaceUncheckedUpdateOneWithoutSettingsNestedInput {

    @Field(() => SpaceCreateWithoutSettingsInput, {nullable:true})
    @Type(() => SpaceCreateWithoutSettingsInput)
    create?: SpaceCreateWithoutSettingsInput;

    @Field(() => SpaceCreateOrConnectWithoutSettingsInput, {nullable:true})
    @Type(() => SpaceCreateOrConnectWithoutSettingsInput)
    connectOrCreate?: SpaceCreateOrConnectWithoutSettingsInput;

    @Field(() => SpaceUpsertWithoutSettingsInput, {nullable:true})
    @Type(() => SpaceUpsertWithoutSettingsInput)
    upsert?: SpaceUpsertWithoutSettingsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => SpaceWhereUniqueInput, {nullable:true})
    @Type(() => SpaceWhereUniqueInput)
    connect?: SpaceWhereUniqueInput;

    @Field(() => SpaceUpdateWithoutSettingsInput, {nullable:true})
    @Type(() => SpaceUpdateWithoutSettingsInput)
    update?: SpaceUpdateWithoutSettingsInput;
}
