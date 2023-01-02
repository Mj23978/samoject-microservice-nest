import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceCreateWithoutSettingsInput } from './space-create-without-settings.input';
import { Type } from 'class-transformer';
import { SpaceCreateOrConnectWithoutSettingsInput } from './space-create-or-connect-without-settings.input';
import { SpaceWhereUniqueInput } from './space-where-unique.input';

@InputType()
export class SpaceUncheckedCreateNestedOneWithoutSettingsInput {

    @Field(() => SpaceCreateWithoutSettingsInput, {nullable:true})
    @Type(() => SpaceCreateWithoutSettingsInput)
    create?: SpaceCreateWithoutSettingsInput;

    @Field(() => SpaceCreateOrConnectWithoutSettingsInput, {nullable:true})
    @Type(() => SpaceCreateOrConnectWithoutSettingsInput)
    connectOrCreate?: SpaceCreateOrConnectWithoutSettingsInput;

    @Field(() => SpaceWhereUniqueInput, {nullable:true})
    @Type(() => SpaceWhereUniqueInput)
    connect?: SpaceWhereUniqueInput;
}
