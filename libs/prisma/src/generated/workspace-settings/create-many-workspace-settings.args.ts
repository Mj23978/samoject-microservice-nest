import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceSettingsCreateManyInput } from './workspace-settings-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWorkspaceSettingsArgs {

    @Field(() => [WorkspaceSettingsCreateManyInput], {nullable:false})
    @Type(() => WorkspaceSettingsCreateManyInput)
    data!: Array<WorkspaceSettingsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
