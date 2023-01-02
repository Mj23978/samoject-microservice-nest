import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceSettingsCreateWithoutSpaceInput } from './space-settings-create-without-space.input';
import { Type } from 'class-transformer';
import { SpaceSettingsCreateOrConnectWithoutSpaceInput } from './space-settings-create-or-connect-without-space.input';
import { SpaceSettingsUpsertWithoutSpaceInput } from './space-settings-upsert-without-space.input';
import { SpaceSettingsWhereUniqueInput } from './space-settings-where-unique.input';
import { SpaceSettingsUpdateWithoutSpaceInput } from './space-settings-update-without-space.input';

@InputType()
export class SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput {

    @Field(() => SpaceSettingsCreateWithoutSpaceInput, {nullable:true})
    @Type(() => SpaceSettingsCreateWithoutSpaceInput)
    create?: SpaceSettingsCreateWithoutSpaceInput;

    @Field(() => SpaceSettingsCreateOrConnectWithoutSpaceInput, {nullable:true})
    @Type(() => SpaceSettingsCreateOrConnectWithoutSpaceInput)
    connectOrCreate?: SpaceSettingsCreateOrConnectWithoutSpaceInput;

    @Field(() => SpaceSettingsUpsertWithoutSpaceInput, {nullable:true})
    @Type(() => SpaceSettingsUpsertWithoutSpaceInput)
    upsert?: SpaceSettingsUpsertWithoutSpaceInput;

    @Field(() => SpaceSettingsWhereUniqueInput, {nullable:true})
    @Type(() => SpaceSettingsWhereUniqueInput)
    connect?: SpaceSettingsWhereUniqueInput;

    @Field(() => SpaceSettingsUpdateWithoutSpaceInput, {nullable:true})
    @Type(() => SpaceSettingsUpdateWithoutSpaceInput)
    update?: SpaceSettingsUpdateWithoutSpaceInput;
}
