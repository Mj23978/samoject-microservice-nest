import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ChatCreateNestedOneWithoutUserInput } from '../chat/chat-create-nested-one-without-user.input';
import { MessageCreateNestedManyWithoutSenderInput } from '../message/message-create-nested-many-without-sender.input';
import { ProjectCreateNestedManyWithoutOwnerInput } from '../project/project-create-nested-many-without-owner.input';
import { TaskCreateNestedManyWithoutCreatorInput } from '../task/task-create-nested-many-without-creator.input';
import { UserAssignedTasksCreateNestedManyWithoutUserInput } from '../user-assigned-tasks/user-assigned-tasks-create-nested-many-without-user.input';
import { WorkspaceCreateNestedOneWithoutUserInput } from '../workspace/workspace-create-nested-one-without-user.input';
import { UserCreateNestedManyWithoutUser_AInput } from './user-create-nested-many-without-user-a.input';
import { UserCreateNestedManyWithoutUser_BInput } from './user-create-nested-many-without-user-b.input';

@InputType()
export class UserCreateWithoutProjectsInput {

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

    @Field(() => ChatCreateNestedOneWithoutUserInput, {nullable:true})
    chat?: ChatCreateNestedOneWithoutUserInput;

    @Field(() => MessageCreateNestedManyWithoutSenderInput, {nullable:true})
    comments?: MessageCreateNestedManyWithoutSenderInput;

    @Field(() => ProjectCreateNestedManyWithoutOwnerInput, {nullable:true})
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput;

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
