import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceSettingsCreateManyInput } from './space-settings-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySpaceSettingsArgs {

    @Field(() => [SpaceSettingsCreateManyInput], {nullable:false})
    @Type(() => SpaceSettingsCreateManyInput)
    data!: Array<SpaceSettingsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
