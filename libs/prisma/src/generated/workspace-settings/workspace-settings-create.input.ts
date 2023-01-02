import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceCreateNestedOneWithoutSettingsInput } from '../workspace/workspace-create-nested-one-without-settings.input';

@InputType()
export class WorkspaceSettingsCreateInput {

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

    @Field(() => WorkspaceCreateNestedOneWithoutSettingsInput, {nullable:true})
    workspace?: WorkspaceCreateNestedOneWithoutSettingsInput;
}
