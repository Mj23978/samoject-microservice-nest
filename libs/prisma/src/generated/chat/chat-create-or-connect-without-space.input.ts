import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutSpaceInput } from './chat-create-without-space.input';

@InputType()
export class ChatCreateOrConnectWithoutSpaceInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: ChatWhereUniqueInput;

    @Field(() => ChatCreateWithoutSpaceInput, {nullable:false})
    @Type(() => ChatCreateWithoutSpaceInput)
    create!: ChatCreateWithoutSpaceInput;
}
