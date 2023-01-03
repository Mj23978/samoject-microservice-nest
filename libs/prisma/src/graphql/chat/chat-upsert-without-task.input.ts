import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatUpdateWithoutTaskInput } from './chat-update-without-task.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutTaskInput } from './chat-create-without-task.input';

@InputType()
export class ChatUpsertWithoutTaskInput {

    @Field(() => ChatUpdateWithoutTaskInput, {nullable:false})
    @Type(() => ChatUpdateWithoutTaskInput)
    update!: ChatUpdateWithoutTaskInput;

    @Field(() => ChatCreateWithoutTaskInput, {nullable:false})
    @Type(() => ChatCreateWithoutTaskInput)
    create!: ChatCreateWithoutTaskInput;
}
