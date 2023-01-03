import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatUpdateWithoutMessagesInput } from './chat-update-without-messages.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutMessagesInput } from './chat-create-without-messages.input';

@InputType()
export class ChatUpsertWithoutMessagesInput {

    @Field(() => ChatUpdateWithoutMessagesInput, {nullable:false})
    @Type(() => ChatUpdateWithoutMessagesInput)
    update!: ChatUpdateWithoutMessagesInput;

    @Field(() => ChatCreateWithoutMessagesInput, {nullable:false})
    @Type(() => ChatCreateWithoutMessagesInput)
    create!: ChatCreateWithoutMessagesInput;
}
