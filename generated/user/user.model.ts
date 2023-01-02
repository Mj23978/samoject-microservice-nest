import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Chat } from '../chat/chat.model';
import { Message } from '../message/message.model';
import { Project } from '../project/project.model';
import { ProjectsOnUsers } from '../projects-on-users/projects-on-users.model';
import { Task } from '../task/task.model';
import { UserAssignedTasks } from '../user-assigned-tasks/user-assigned-tasks.model';
import { Workspace } from '../workspace/workspace.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    firstname!: string | null;

    @Field(() => String, {nullable:true})
    lastname!: string | null;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => String, {nullable:true})
    chatId!: string | null;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Chat, {nullable:true})
    chat?: Chat | null;

    @Field(() => [Message], {nullable:true})
    comments?: Array<Message>;

    @Field(() => [Project], {nullable:true})
    ownedProjects?: Array<Project>;

    @Field(() => [ProjectsOnUsers], {nullable:true})
    projects?: Array<ProjectsOnUsers>;

    @Field(() => [Task], {nullable:true})
    createdTasks?: Array<Task>;

    @Field(() => [UserAssignedTasks], {nullable:true})
    assignedTasks?: Array<UserAssignedTasks>;

    @Field(() => Workspace, {nullable:true})
    workspaces?: Workspace | null;

    @Field(() => [User], {nullable:true})
    User_B?: Array<User>;

    @Field(() => [User], {nullable:true})
    User_A?: Array<User>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
