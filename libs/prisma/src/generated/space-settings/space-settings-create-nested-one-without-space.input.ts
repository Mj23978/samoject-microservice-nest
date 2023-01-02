import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceSettingsCreateWithoutSpaceInput } from './space-settings-create-without-space.input';
import { Type } from 'class-transformer';
import { SpaceSettingsCreateOrConnectWithoutSpaceInput } from './space-settings-create-or-connect-without-space.input';
import { SpaceSettingsWhereUniqueInput } from './space-settings-where-unique.input';

@InputType()
export class SpaceSettingsCreateNestedOneWithoutSpaceInput {

    @Field(() => SpaceSettingsCreateWithoutSpaceInput, {nullable:true})
    @Type(() => SpaceSettingsCreateWithoutSpaceInput)
    create?: SpaceSettingsCreateWithoutSpaceInput;

    @Field(() => SpaceSettingsCreateOrConnectWithoutSpaceInput, {nullable:true})
    @Type(() => SpaceSettingsCreateOrConnectWithoutSpaceInput)
    connectOrCreate?: SpaceSettingsCreateOrConnectWithoutSpaceInput;

    @Field(() => SpaceSettingsWhereUniqueInput, {nullable:true})
    @Type(() => SpaceSettingsWhereUniqueInput)
    connect?: SpaceSettingsWhereUniqueInput;
}
