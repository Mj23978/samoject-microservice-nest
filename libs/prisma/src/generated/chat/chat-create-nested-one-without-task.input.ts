import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutTaskInput } from './chat-create-without-task.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutTaskInput } from './chat-create-or-connect-without-task.input';
import { ChatWhereUniqueInput } from './chat-where-unique.input';

@InputType()
export class ChatCreateNestedOneWithoutTaskInput {

    @Field(() => ChatCreateWithoutTaskInput, {nullable:true})
    @Type(() => ChatCreateWithoutTaskInput)
    create?: ChatCreateWithoutTaskInput;

    @Field(() => ChatCreateOrConnectWithoutTaskInput, {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutTaskInput)
    connectOrCreate?: ChatCreateOrConnectWithoutTaskInput;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: ChatWhereUniqueInput;
}
