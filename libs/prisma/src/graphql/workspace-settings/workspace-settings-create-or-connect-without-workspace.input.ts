import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceSettingsWhereUniqueInput } from './workspace-settings-where-unique.input';
import { Type } from 'class-transformer';
import { WorkspaceSettingsCreateWithoutWorkspaceInput } from './workspace-settings-create-without-workspace.input';

@InputType()
export class WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput {

    @Field(() => WorkspaceSettingsWhereUniqueInput, {nullable:false})
    @Type(() => WorkspaceSettingsWhereUniqueInput)
    where!: WorkspaceSettingsWhereUniqueInput;

    @Field(() => WorkspaceSettingsCreateWithoutWorkspaceInput, {nullable:false})
    @Type(() => WorkspaceSettingsCreateWithoutWorkspaceInput)
    create!: WorkspaceSettingsCreateWithoutWorkspaceInput;
}
