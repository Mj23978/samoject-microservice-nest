import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput } from '../workspace-settings/workspace-settings-create-nested-one-without-workspace.input';
import { ProjectCreateNestedManyWithoutWorkspaceInput } from '../project/project-create-nested-many-without-workspace.input';

@InputType()
export class WorkspaceCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput, {nullable:false})
    settings!: WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput;

    @Field(() => ProjectCreateNestedManyWithoutWorkspaceInput, {nullable:true})
    projects?: ProjectCreateNestedManyWithoutWorkspaceInput;
}
