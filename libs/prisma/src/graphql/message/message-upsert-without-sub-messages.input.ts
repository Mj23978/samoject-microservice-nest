import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUpdateWithoutSubMessagesInput } from './message-update-without-sub-messages.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutSubMessagesInput } from './message-create-without-sub-messages.input';

@InputType()
export class MessageUpsertWithoutSubMessagesInput {

    @Field(() => MessageUpdateWithoutSubMessagesInput, {nullable:false})
    @Type(() => MessageUpdateWithoutSubMessagesInput)
    update!: MessageUpdateWithoutSubMessagesInput;

    @Field(() => MessageCreateWithoutSubMessagesInput, {nullable:false})
    @Type(() => MessageCreateWithoutSubMessagesInput)
    create!: MessageCreateWithoutSubMessagesInput;
}
