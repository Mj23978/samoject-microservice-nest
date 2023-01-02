import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceSettingsWhereInput } from './space-settings-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySpaceSettingsArgs {

    @Field(() => SpaceSettingsWhereInput, {nullable:true})
    @Type(() => SpaceSettingsWhereInput)
    where?: SpaceSettingsWhereInput;
}
