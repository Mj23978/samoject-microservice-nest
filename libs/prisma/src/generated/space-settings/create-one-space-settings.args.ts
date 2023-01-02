import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceSettingsCreateInput } from './space-settings-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSpaceSettingsArgs {

    @Field(() => SpaceSettingsCreateInput, {nullable:false})
    @Type(() => SpaceSettingsCreateInput)
    data!: SpaceSettingsCreateInput;
}
