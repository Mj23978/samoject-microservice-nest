import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { Type } from 'class-transformer';
import { SpaceCreateWithoutSettingsInput } from './space-create-without-settings.input';

@InputType()
export class SpaceCreateOrConnectWithoutSettingsInput {

    @Field(() => SpaceWhereUniqueInput, {nullable:false})
    @Type(() => SpaceWhereUniqueInput)
    where!: SpaceWhereUniqueInput;

    @Field(() => SpaceCreateWithoutSettingsInput, {nullable:false})
    @Type(() => SpaceCreateWithoutSettingsInput)
    create!: SpaceCreateWithoutSettingsInput;
}
