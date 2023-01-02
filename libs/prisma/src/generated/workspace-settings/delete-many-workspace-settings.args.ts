import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceSettingsWhereInput } from './workspace-settings-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWorkspaceSettingsArgs {

    @Field(() => WorkspaceSettingsWhereInput, {nullable:true})
    @Type(() => WorkspaceSettingsWhereInput)
    where?: WorkspaceSettingsWhereInput;
}
