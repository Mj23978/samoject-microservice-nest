import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutSpaceInput } from './chat-create-without-space.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutSpaceInput } from './chat-create-or-connect-without-space.input';
import { ChatWhereUniqueInput } from './chat-where-unique.input';

@InputType()
export class ChatCreateNestedOneWithoutSpaceInput {

    @Field(() => ChatCreateWithoutSpaceInput, {nullable:true})
    @Type(() => ChatCreateWithoutSpaceInput)
    create?: ChatCreateWithoutSpaceInput;

    @Field(() => ChatCreateOrConnectWithoutSpaceInput, {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutSpaceInput)
    connectOrCreate?: ChatCreateOrConnectWithoutSpaceInput;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: ChatWhereUniqueInput;
}
