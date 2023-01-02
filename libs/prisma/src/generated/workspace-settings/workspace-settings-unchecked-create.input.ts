import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceUncheckedCreateNestedOneWithoutSettingsInput } from '../workspace/workspace-unchecked-create-nested-one-without-settings.input';

@InputType()
export class WorkspaceSettingsUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    localId!: string;

    @Field(() => String, {nullable:false})
    workspaceId!: string;

    @Field(() => WorkspaceUncheckedCreateNestedOneWithoutSettingsInput, {nullable:true})
    workspace?: WorkspaceUncheckedCreateNestedOneWithoutSettingsInput;
}
