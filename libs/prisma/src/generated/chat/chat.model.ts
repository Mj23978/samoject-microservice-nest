import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Message } from '../message/message.model';
import { Project } from '../project/project.model';
import { Space } from '../space/space.model';
import { Task } from '../task/task.model';
import { User } from '../user/user.model';
import { ChatCount } from './chat-count.output';

@ObjectType()
export class Chat {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Message], {nullable:true})
    messages?: Array<Message>;

    @Field(() => Project, {nullable:true})
    Project?: Project | null;

    @Field(() => Space, {nullable:true})
    Space?: Space | null;

    @Field(() => Task, {nullable:true})
    Task?: Task | null;

    @Field(() => User, {nullable:true})
    User?: User | null;

    @Field(() => ChatCount, {nullable:false})
    _count?: ChatCount;
}
