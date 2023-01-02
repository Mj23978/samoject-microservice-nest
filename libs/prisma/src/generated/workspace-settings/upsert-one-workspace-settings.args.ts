import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceSettingsWhereUniqueInput } from './workspace-settings-where-unique.input';
import { Type } from 'class-transformer';
import { WorkspaceSettingsCreateInput } from './workspace-settings-create.input';
import { WorkspaceSettingsUpdateInput } from './workspace-settings-update.input';

@ArgsType()
export class UpsertOneWorkspaceSettingsArgs {

    @Field(() => WorkspaceSettingsWhereUniqueInput, {nullable:false})
    @Type(() => WorkspaceSettingsWhereUniqueInput)
    where!: WorkspaceSettingsWhereUniqueInput;

    @Field(() => WorkspaceSettingsCreateInput, {nullable:false})
    @Type(() => WorkspaceSettingsCreateInput)
    create!: WorkspaceSettingsCreateInput;

    @Field(() => WorkspaceSettingsUpdateInput, {nullable:false})
    @Type(() => WorkspaceSettingsUpdateInput)
    update!: WorkspaceSettingsUpdateInput;
}
