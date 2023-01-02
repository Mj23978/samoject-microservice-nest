import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceSettingsCreateWithoutWorkspaceInput } from './workspace-settings-create-without-workspace.input';
import { Type } from 'class-transformer';
import { WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput } from './workspace-settings-create-or-connect-without-workspace.input';
import { WorkspaceSettingsWhereUniqueInput } from './workspace-settings-where-unique.input';

@InputType()
export class WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput {

    @Field(() => WorkspaceSettingsCreateWithoutWorkspaceInput, {nullable:true})
    @Type(() => WorkspaceSettingsCreateWithoutWorkspaceInput)
    create?: WorkspaceSettingsCreateWithoutWorkspaceInput;

    @Field(() => WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput, {nullable:true})
    @Type(() => WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput)
    connectOrCreate?: WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput;

    @Field(() => WorkspaceSettingsWhereUniqueInput, {nullable:true})
    @Type(() => WorkspaceSettingsWhereUniqueInput)
    connect?: WorkspaceSettingsWhereUniqueInput;
}
