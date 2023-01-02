import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceCreateNestedOneWithoutSettingsInput } from '../space/space-create-nested-one-without-settings.input';

@InputType()
export class SpaceSettingsCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    localId!: string;

    @Field(() => String, {nullable:false})
    spaceId!: string;

    @Field(() => SpaceCreateNestedOneWithoutSettingsInput, {nullable:true})
    space?: SpaceCreateNestedOneWithoutSettingsInput;
}
