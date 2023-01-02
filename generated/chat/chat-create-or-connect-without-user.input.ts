import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutUserInput } from './chat-create-without-user.input';

@InputType()
export class ChatCreateOrConnectWithoutUserInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: ChatWhereUniqueInput;

    @Field(() => ChatCreateWithoutUserInput, {nullable:false})
    @Type(() => ChatCreateWithoutUserInput)
    create!: ChatCreateWithoutUserInput;
}
