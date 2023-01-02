import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Chat } from '../chat/chat.model';
import { User } from '../user/user.model';
import { MessageCount } from './message-count.output';

@ObjectType()
export class Message {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false,defaultValue:'string'})
    contentType!: string;

    @Field(() => String, {nullable:false,defaultValue:'message'})
    type!: string;

    @Field(() => String, {nullable:true})
    senderId!: string | null;

    @Field(() => String, {nullable:true})
    parentId!: string | null;

    @Field(() => String, {nullable:false})
    chatId!: string;

    @Field(() => Chat, {nullable:false})
    chat?: Chat;

    @Field(() => Message, {nullable:true})
    parent?: Message | null;

    @Field(() => User, {nullable:true})
    sender?: User | null;

    @Field(() => [Message], {nullable:true})
    subMessages?: Array<Message>;

    @Field(() => MessageCount, {nullable:false})
    _count?: MessageCount;
}
