import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceSettingsUpdateManyMutationInput } from './workspace-settings-update-many-mutation.input';
import { Type } from 'class-transformer';
import { WorkspaceSettingsWhereInput } from './workspace-settings-where.input';

@ArgsType()
export class UpdateManyWorkspaceSettingsArgs {

    @Field(() => WorkspaceSettingsUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkspaceSettingsUpdateManyMutationInput)
    data!: WorkspaceSettingsUpdateManyMutationInput;

    @Field(() => WorkspaceSettingsWhereInput, {nullable:true})
    @Type(() => WorkspaceSettingsWhereInput)
    where?: WorkspaceSettingsWhereInput;
}
