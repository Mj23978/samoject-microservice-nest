import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { MessageCreateNestedManyWithoutSenderInput } from '../message/message-create-nested-many-without-sender.input';
import { ProjectCreateNestedManyWithoutOwnerInput } from '../project/project-create-nested-many-without-owner.input';
import { ProjectsOnUsersCreateNestedManyWithoutUserInput } from '../projects-on-users/projects-on-users-create-nested-many-without-user.input';
import { TaskCreateNestedManyWithoutCreatorInput } from '../task/task-create-nested-many-without-creator.input';
import { UserAssignedTasksCreateNestedManyWithoutUserInput } from '../user-assigned-tasks/user-assigned-tasks-create-nested-many-without-user.input';
import { WorkspaceCreateNestedOneWithoutUserInput } from '../workspace/workspace-create-nested-one-without-user.input';
import { UserCreateNestedManyWithoutUser_AInput } from './user-create-nested-many-without-user-a.input';
import { UserCreateNestedManyWithoutUser_BInput } from './user-create-nested-many-without-user-b.input';

@InputType()
export class UserCreateWithoutChatInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    firstname?: string;

    @Field(() => String, {nullable:true})
    lastname?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => MessageCreateNestedManyWithoutSenderInput, {nullable:true})
    comments?: MessageCreateNestedManyWithoutSenderInput;

    @Field(() => ProjectCreateNestedManyWithoutOwnerInput, {nullable:true})
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput;

    @Field(() => ProjectsOnUsersCreateNestedManyWithoutUserInput, {nullable:true})
    projects?: ProjectsOnUsersCreateNestedManyWithoutUserInput;

    @Field(() => TaskCreateNestedManyWithoutCreatorInput, {nullable:true})
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput;

    @Field(() => UserAssignedTasksCreateNestedManyWithoutUserInput, {nullable:true})
    assignedTasks?: UserAssignedTasksCreateNestedManyWithoutUserInput;

    @Field(() => WorkspaceCreateNestedOneWithoutUserInput, {nullable:true})
    workspaces?: WorkspaceCreateNestedOneWithoutUserInput;

    @Field(() => UserCreateNestedManyWithoutUser_AInput, {nullable:true})
    User_B?: UserCreateNestedManyWithoutUser_AInput;

    @Field(() => UserCreateNestedManyWithoutUser_BInput, {nullable:true})
    User_A?: UserCreateNestedManyWithoutUser_BInput;
}
