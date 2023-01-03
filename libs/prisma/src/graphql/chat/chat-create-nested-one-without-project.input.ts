import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutProjectInput } from './chat-create-without-project.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutProjectInput } from './chat-create-or-connect-without-project.input';
import { ChatWhereUniqueInput } from './chat-where-unique.input';

@InputType()
export class ChatCreateNestedOneWithoutProjectInput {

    @Field(() => ChatCreateWithoutProjectInput, {nullable:true})
    @Type(() => ChatCreateWithoutProjectInput)
    create?: ChatCreateWithoutProjectInput;

    @Field(() => ChatCreateOrConnectWithoutProjectInput, {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutProjectInput)
    connectOrCreate?: ChatCreateOrConnectWithoutProjectInput;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: ChatWhereUniqueInput;
}
