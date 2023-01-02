import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutChatInput } from './message-create-without-chat.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutChatInput } from './message-create-or-connect-without-chat.input';
import { MessageUpsertWithWhereUniqueWithoutChatInput } from './message-upsert-with-where-unique-without-chat.input';
import { MessageCreateManyChatInputEnvelope } from './message-create-many-chat-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutChatInput } from './message-update-with-where-unique-without-chat.input';
import { MessageUpdateManyWithWhereWithoutChatInput } from './message-update-many-with-where-without-chat.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUncheckedUpdateManyWithoutChatNestedInput {

    @Field(() => [MessageCreateWithoutChatInput], {nullable:true})
    @Type(() => MessageCreateWithoutChatInput)
    create?: Array<MessageCreateWithoutChatInput>;

    @Field(() => [MessageCreateOrConnectWithoutChatInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutChatInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutChatInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutChatInput], {nullable:true})
    @Type(() => MessageUpsertWithWhereUniqueWithoutChatInput)
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutChatInput>;

    @Field(() => MessageCreateManyChatInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyChatInputEnvelope)
    createMany?: MessageCreateManyChatInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    set?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    disconnect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    delete?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageUpdateWithWhereUniqueWithoutChatInput], {nullable:true})
    @Type(() => MessageUpdateWithWhereUniqueWithoutChatInput)
    update?: Array<MessageUpdateWithWhereUniqueWithoutChatInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutChatInput], {nullable:true})
    @Type(() => MessageUpdateManyWithWhereWithoutChatInput)
    updateMany?: Array<MessageUpdateManyWithWhereWithoutChatInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    @Type(() => MessageScalarWhereInput)
    deleteMany?: Array<MessageScalarWhereInput>;
}
