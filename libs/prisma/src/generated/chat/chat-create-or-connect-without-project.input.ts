import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutProjectInput } from './chat-create-without-project.input';

@InputType()
export class ChatCreateOrConnectWithoutProjectInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: ChatWhereUniqueInput;

    @Field(() => ChatCreateWithoutProjectInput, {nullable:false})
    @Type(() => ChatCreateWithoutProjectInput)
    create!: ChatCreateWithoutProjectInput;
}
