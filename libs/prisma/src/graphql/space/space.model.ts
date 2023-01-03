import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Chat } from '../chat/chat.model';
import { Project } from '../project/project.model';
import { SpaceSettings } from '../space-settings/space-settings.model';
import { SpaceView } from '../space-view/space-view.model';
import { SpaceCount } from './space-count.output';

@ObjectType()
export class Space {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    viewId!: string;

    @Field(() => String, {nullable:false})
    projectId!: string;

    @Field(() => String, {nullable:false})
    settingsId!: string;

    @Field(() => String, {nullable:false})
    spaceType!: string;

    @Field(() => String, {nullable:true})
    parentId!: string | null;

    @Field(() => String, {nullable:true})
    chatId!: string | null;

    @Field(() => Chat, {nullable:true})
    chat?: Chat | null;

    @Field(() => Space, {nullable:true})
    parent?: Space | null;

    @Field(() => Project, {nullable:false})
    project?: Project;

    @Field(() => SpaceSettings, {nullable:false})
    settings?: SpaceSettings;

    @Field(() => SpaceView, {nullable:false})
    view?: SpaceView;

    @Field(() => [Space], {nullable:true})
    subspaces?: Array<Space>;

    @Field(() => SpaceCount, {nullable:false})
    _count?: SpaceCount;
}
