import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceSettingsCreateInput } from './workspace-settings-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWorkspaceSettingsArgs {

    @Field(() => WorkspaceSettingsCreateInput, {nullable:false})
    @Type(() => WorkspaceSettingsCreateInput)
    data!: WorkspaceSettingsCreateInput;
}
