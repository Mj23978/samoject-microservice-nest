import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceSettingsUpdateWithoutWorkspaceInput } from './workspace-settings-update-without-workspace.input';
import { Type } from 'class-transformer';
import { WorkspaceSettingsCreateWithoutWorkspaceInput } from './workspace-settings-create-without-workspace.input';

@InputType()
export class WorkspaceSettingsUpsertWithoutWorkspaceInput {

    @Field(() => WorkspaceSettingsUpdateWithoutWorkspaceInput, {nullable:false})
    @Type(() => WorkspaceSettingsUpdateWithoutWorkspaceInput)
    update!: WorkspaceSettingsUpdateWithoutWorkspaceInput;

    @Field(() => WorkspaceSettingsCreateWithoutWorkspaceInput, {nullable:false})
    @Type(() => WorkspaceSettingsCreateWithoutWorkspaceInput)
    create!: WorkspaceSettingsCreateWithoutWorkspaceInput;
}
