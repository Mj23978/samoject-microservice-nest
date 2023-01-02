import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutMessagesInput } from './chat-create-without-messages.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutMessagesInput } from './chat-create-or-connect-without-messages.input';
import { ChatWhereUniqueInput } from './chat-where-unique.input';

@InputType()
export class ChatCreateNestedOneWithoutMessagesInput {

    @Field(() => ChatCreateWithoutMessagesInput, {nullable:true})
    @Type(() => ChatCreateWithoutMessagesInput)
    create?: ChatCreateWithoutMessagesInput;

    @Field(() => ChatCreateOrConnectWithoutMessagesInput, {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutMessagesInput)
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: ChatWhereUniqueInput;
}
