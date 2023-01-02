import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceSettingsWhereUniqueInput } from './workspace-settings-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneWorkspaceSettingsArgs {

    @Field(() => WorkspaceSettingsWhereUniqueInput, {nullable:false})
    @Type(() => WorkspaceSettingsWhereUniqueInput)
    where!: WorkspaceSettingsWhereUniqueInput;
}
