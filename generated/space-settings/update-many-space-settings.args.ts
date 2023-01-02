import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceSettingsUpdateManyMutationInput } from './space-settings-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SpaceSettingsWhereInput } from './space-settings-where.input';

@ArgsType()
export class UpdateManySpaceSettingsArgs {

    @Field(() => SpaceSettingsUpdateManyMutationInput, {nullable:false})
    @Type(() => SpaceSettingsUpdateManyMutationInput)
    data!: SpaceSettingsUpdateManyMutationInput;

    @Field(() => SpaceSettingsWhereInput, {nullable:true})
    @Type(() => SpaceSettingsWhereInput)
    where?: SpaceSettingsWhereInput;
}
