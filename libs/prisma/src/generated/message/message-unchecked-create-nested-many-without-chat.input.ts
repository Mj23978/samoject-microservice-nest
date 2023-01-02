import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutChatInput } from './message-create-without-chat.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutChatInput } from './message-create-or-connect-without-chat.input';
import { MessageCreateManyChatInputEnvelope } from './message-create-many-chat-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageUncheckedCreateNestedManyWithoutChatInput {

    @Field(() => [MessageCreateWithoutChatInput], {nullable:true})
    @Type(() => MessageCreateWithoutChatInput)
    create?: Array<MessageCreateWithoutChatInput>;

    @Field(() => [MessageCreateOrConnectWithoutChatInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutChatInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutChatInput>;

    @Field(() => MessageCreateManyChatInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyChatInputEnvelope)
    createMany?: MessageCreateManyChatInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
}
