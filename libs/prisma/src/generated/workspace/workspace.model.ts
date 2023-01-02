import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { WorkspaceSettings } from '../workspace-settings/workspace-settings.model';
import { User } from '../user/user.model';
import { Project } from '../project/project.model';
import { WorkspaceCount } from './workspace-count.output';

@ObjectType()
export class Workspace {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    settingsId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => WorkspaceSettings, {nullable:false})
    settings?: WorkspaceSettings;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [Project], {nullable:true})
    projects?: Array<Project>;

    @Field(() => WorkspaceCount, {nullable:false})
    _count?: WorkspaceCount;
}
