import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceSettingsCreateWithoutWorkspaceInput } from './workspace-settings-create-without-workspace.input';
import { Type } from 'class-transformer';
import { WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput } from './workspace-settings-create-or-connect-without-workspace.input';
import { WorkspaceSettingsUpsertWithoutWorkspaceInput } from './workspace-settings-upsert-without-workspace.input';
import { WorkspaceSettingsWhereUniqueInput } from './workspace-settings-where-unique.input';
import { WorkspaceSettingsUpdateWithoutWorkspaceInput } from './workspace-settings-update-without-workspace.input';

@InputType()
export class WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput {

    @Field(() => WorkspaceSettingsCreateWithoutWorkspaceInput, {nullable:true})
    @Type(() => WorkspaceSettingsCreateWithoutWorkspaceInput)
    create?: WorkspaceSettingsCreateWithoutWorkspaceInput;

    @Field(() => WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput, {nullable:true})
    @Type(() => WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput)
    connectOrCreate?: WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput;

    @Field(() => WorkspaceSettingsUpsertWithoutWorkspaceInput, {nullable:true})
    @Type(() => WorkspaceSettingsUpsertWithoutWorkspaceInput)
    upsert?: WorkspaceSettingsUpsertWithoutWorkspaceInput;

    @Field(() => WorkspaceSettingsWhereUniqueInput, {nullable:true})
    @Type(() => WorkspaceSettingsWhereUniqueInput)
    connect?: WorkspaceSettingsWhereUniqueInput;

    @Field(() => WorkspaceSettingsUpdateWithoutWorkspaceInput, {nullable:true})
    @Type(() => WorkspaceSettingsUpdateWithoutWorkspaceInput)
    update?: WorkspaceSettingsUpdateWithoutWorkspaceInput;
}
