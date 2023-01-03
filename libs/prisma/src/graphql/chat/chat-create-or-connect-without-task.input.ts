import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutTaskInput } from './chat-create-without-task.input';

@InputType()
export class ChatCreateOrConnectWithoutTaskInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: ChatWhereUniqueInput;

    @Field(() => ChatCreateWithoutTaskInput, {nullable:false})
    @Type(() => ChatCreateWithoutTaskInput)
    create!: ChatCreateWithoutTaskInput;
}
