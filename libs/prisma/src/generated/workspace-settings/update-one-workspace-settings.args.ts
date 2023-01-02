import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceSettingsUpdateInput } from './workspace-settings-update.input';
import { Type } from 'class-transformer';
import { WorkspaceSettingsWhereUniqueInput } from './workspace-settings-where-unique.input';

@ArgsType()
export class UpdateOneWorkspaceSettingsArgs {

    @Field(() => WorkspaceSettingsUpdateInput, {nullable:false})
    @Type(() => WorkspaceSettingsUpdateInput)
    data!: WorkspaceSettingsUpdateInput;

    @Field(() => WorkspaceSettingsWhereUniqueInput, {nullable:false})
    @Type(() => WorkspaceSettingsWhereUniqueInput)
    where!: WorkspaceSettingsWhereUniqueInput;
}
