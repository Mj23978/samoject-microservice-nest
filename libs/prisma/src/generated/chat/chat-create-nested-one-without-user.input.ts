import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutUserInput } from './chat-create-without-user.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutUserInput } from './chat-create-or-connect-without-user.input';
import { ChatWhereUniqueInput } from './chat-where-unique.input';

@InputType()
export class ChatCreateNestedOneWithoutUserInput {

    @Field(() => ChatCreateWithoutUserInput, {nullable:true})
    @Type(() => ChatCreateWithoutUserInput)
    create?: ChatCreateWithoutUserInput;

    @Field(() => ChatCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutUserInput)
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: ChatWhereUniqueInput;
}
