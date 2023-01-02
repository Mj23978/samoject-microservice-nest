import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { MessageUncheckedCreateNestedManyWithoutSenderInput } from '../message/message-unchecked-create-nested-many-without-sender.input';
import { ProjectUncheckedCreateNestedManyWithoutOwnerInput } from '../project/project-unchecked-create-nested-many-without-owner.input';
import { TaskUncheckedCreateNestedManyWithoutCreatorInput } from '../task/task-unchecked-create-nested-many-without-creator.input';
import { UserAssignedTasksUncheckedCreateNestedManyWithoutUserInput } from '../user-assigned-tasks/user-assigned-tasks-unchecked-create-nested-many-without-user.input';
import { WorkspaceUncheckedCreateNestedOneWithoutUserInput } from '../workspace/workspace-unchecked-create-nested-one-without-user.input';
import { UserUncheckedCreateNestedManyWithoutUser_AInput } from './user-unchecked-create-nested-many-without-user-a.input';
import { UserUncheckedCreateNestedManyWithoutUser_BInput } from './user-unchecked-create-nested-many-without-user-b.input';

@InputType()
export class UserUncheckedCreateWithoutProjectsInput {

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

    @Field(() => String, {nullable:true})
    chatId?: string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => MessageUncheckedCreateNestedManyWithoutSenderInput, {nullable:true})
    comments?: MessageUncheckedCreateNestedManyWithoutSenderInput;

    @Field(() => ProjectUncheckedCreateNestedManyWithoutOwnerInput, {nullable:true})
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput;

    @Field(() => TaskUncheckedCreateNestedManyWithoutCreatorInput, {nullable:true})
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput;

    @Field(() => UserAssignedTasksUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    assignedTasks?: UserAssignedTasksUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => WorkspaceUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    workspaces?: WorkspaceUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutUser_AInput, {nullable:true})
    User_B?: UserUncheckedCreateNestedManyWithoutUser_AInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutUser_BInput, {nullable:true})
    User_A?: UserUncheckedCreateNestedManyWithoutUser_BInput;
}
