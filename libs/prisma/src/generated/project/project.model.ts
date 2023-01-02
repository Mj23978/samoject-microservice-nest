import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Chat } from '../chat/chat.model';
import { User } from '../user/user.model';
import { ProjectSettings } from '../project-settings/project-settings.model';
import { Workspace } from '../workspace/workspace.model';
import { ProjectsOnUsers } from '../projects-on-users/projects-on-users.model';
import { Space } from '../space/space.model';
import { Task } from '../task/task.model';
import { ProjectCount } from './project-count.output';

@ObjectType()
export class Project {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:false})
    settingsId!: string;

    @Field(() => String, {nullable:false})
    workspaceId!: string;

    @Field(() => String, {nullable:false})
    ownerId!: string;

    @Field(() => String, {nullable:true})
    chatId!: string | null;

    @Field(() => Chat, {nullable:true})
    chat?: Chat | null;

    @Field(() => User, {nullable:false})
    owner?: User;

    @Field(() => ProjectSettings, {nullable:false})
    settings?: ProjectSettings;

    @Field(() => Workspace, {nullable:false})
    workspace?: Workspace;

    @Field(() => [ProjectsOnUsers], {nullable:true})
    users?: Array<ProjectsOnUsers>;

    @Field(() => [Space], {nullable:true})
    spaces?: Array<Space>;

    @Field(() => [Task], {nullable:true})
    tasks?: Array<Task>;

    @Field(() => ProjectCount, {nullable:false})
    _count?: ProjectCount;
}
