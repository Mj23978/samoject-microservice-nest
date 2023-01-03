import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceSettingsWhereUniqueInput } from './space-settings-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSpaceSettingsArgs {

    @Field(() => SpaceSettingsWhereUniqueInput, {nullable:false})
    @Type(() => SpaceSettingsWhereUniqueInput)
    where!: SpaceSettingsWhereUniqueInput;
}
