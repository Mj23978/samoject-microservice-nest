import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutOwnedProjectsInput } from '../user/user-create-nested-one-without-owned-projects.input';
import { ProjectSettingsCreateNestedOneWithoutProjectInput } from '../project-settings/project-settings-create-nested-one-without-project.input';
import { WorkspaceCreateNestedOneWithoutProjectsInput } from '../workspace/workspace-create-nested-one-without-projects.input';
import { ProjectsOnUsersCreateNestedManyWithoutProjectInput } from '../projects-on-users/projects-on-users-create-nested-many-without-project.input';
import { SpaceCreateNestedManyWithoutProjectInput } from '../space/space-create-nested-many-without-project.input';
import { TaskCreateNestedManyWithoutProjectInput } from '../task/task-create-nested-many-without-project.input';

@InputType()
export class ProjectCreateWithoutChatInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserCreateNestedOneWithoutOwnedProjectsInput, {nullable:false})
    owner!: UserCreateNestedOneWithoutOwnedProjectsInput;

    @Field(() => ProjectSettingsCreateNestedOneWithoutProjectInput, {nullable:false})
    settings!: ProjectSettingsCreateNestedOneWithoutProjectInput;

    @Field(() => WorkspaceCreateNestedOneWithoutProjectsInput, {nullable:false})
    workspace!: WorkspaceCreateNestedOneWithoutProjectsInput;

    @Field(() => ProjectsOnUsersCreateNestedManyWithoutProjectInput, {nullable:true})
    users?: ProjectsOnUsersCreateNestedManyWithoutProjectInput;

    @Field(() => SpaceCreateNestedManyWithoutProjectInput, {nullable:true})
    spaces?: SpaceCreateNestedManyWithoutProjectInput;

    @Field(() => TaskCreateNestedManyWithoutProjectInput, {nullable:true})
    tasks?: TaskCreateNestedManyWithoutProjectInput;
}
