import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceSettingsUpdateInput } from './space-settings-update.input';
import { Type } from 'class-transformer';
import { SpaceSettingsWhereUniqueInput } from './space-settings-where-unique.input';

@ArgsType()
export class UpdateOneSpaceSettingsArgs {

    @Field(() => SpaceSettingsUpdateInput, {nullable:false})
    @Type(() => SpaceSettingsUpdateInput)
    data!: SpaceSettingsUpdateInput;

    @Field(() => SpaceSettingsWhereUniqueInput, {nullable:false})
    @Type(() => SpaceSettingsWhereUniqueInput)
    where!: SpaceSettingsWhereUniqueInput;
}
