import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceSettingsWhereUniqueInput } from './space-settings-where-unique.input';
import { Type } from 'class-transformer';
import { SpaceSettingsCreateWithoutSpaceInput } from './space-settings-create-without-space.input';

@InputType()
export class SpaceSettingsCreateOrConnectWithoutSpaceInput {

    @Field(() => SpaceSettingsWhereUniqueInput, {nullable:false})
    @Type(() => SpaceSettingsWhereUniqueInput)
    where!: SpaceSettingsWhereUniqueInput;

    @Field(() => SpaceSettingsCreateWithoutSpaceInput, {nullable:false})
    @Type(() => SpaceSettingsCreateWithoutSpaceInput)
    create!: SpaceSettingsCreateWithoutSpaceInput;
}
