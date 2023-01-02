import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Chat } from '../chat/chat.model';
import { User } from '../user/user.model';
import { Project } from '../project/project.model';
import { UserAssignedTasks } from '../user-assigned-tasks/user-assigned-tasks.model';
import { TaskCount } from './task-count.output';

@ObjectType()
export class Task {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    projectId!: string | null;

    @Field(() => String, {nullable:true})
    creatorId!: string | null;

    @Field(() => String, {nullable:true})
    parentId!: string | null;

    @Field(() => String, {nullable:false,defaultValue:'TODO'})
    status!: string;

    @Field(() => String, {nullable:false})
    details!: string;

    @Field(() => String, {nullable:true})
    chatId!: string | null;

    @Field(() => Chat, {nullable:true})
    chat?: Chat | null;

    @Field(() => User, {nullable:true})
    creator?: User | null;

    @Field(() => Task, {nullable:true})
    parent?: Task | null;

    @Field(() => Project, {nullable:true})
    project?: Project | null;

    @Field(() => [Task], {nullable:true})
    subTasks?: Array<Task>;

    @Field(() => [UserAssignedTasks], {nullable:true})
    assignes?: Array<UserAssignedTasks>;

    @Field(() => TaskCount, {nullable:false})
    _count?: TaskCount;
}
