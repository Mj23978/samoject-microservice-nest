import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutWorkspacesInput } from '../user/user-create-nested-one-without-workspaces.input';
import { ProjectCreateNestedManyWithoutWorkspaceInput } from '../project/project-create-nested-many-without-workspace.input';

@InputType()
export class WorkspaceCreateWithoutSettingsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => UserCreateNestedOneWithoutWorkspacesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutWorkspacesInput;

    @Field(() => ProjectCreateNestedManyWithoutWorkspaceInput, {nullable:true})
    projects?: ProjectCreateNestedManyWithoutWorkspaceInput;
}
