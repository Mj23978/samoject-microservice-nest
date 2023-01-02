import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageUpdateWithoutChatInput } from './message-update-without-chat.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutChatInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutChatInput, {nullable:false})
    @Type(() => MessageUpdateWithoutChatInput)
    data!: MessageUpdateWithoutChatInput;
}
