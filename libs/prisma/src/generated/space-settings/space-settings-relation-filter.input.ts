import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceSettingsWhereInput } from './space-settings-where.input';

@InputType()
export class SpaceSettingsRelationFilter {

    @Field(() => SpaceSettingsWhereInput, {nullable:true})
    is?: SpaceSettingsWhereInput;

    @Field(() => SpaceSettingsWhereInput, {nullable:true})
    isNot?: SpaceSettingsWhereInput;
}
