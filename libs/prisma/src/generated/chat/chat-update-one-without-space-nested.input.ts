import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutSpaceInput } from './chat-create-without-space.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutSpaceInput } from './chat-create-or-connect-without-space.input';
import { ChatUpsertWithoutSpaceInput } from './chat-upsert-without-space.input';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { ChatUpdateWithoutSpaceInput } from './chat-update-without-space.input';

@InputType()
export class ChatUpdateOneWithoutSpaceNestedInput {

    @Field(() => ChatCreateWithoutSpaceInput, {nullable:true})
    @Type(() => ChatCreateWithoutSpaceInput)
    create?: ChatCreateWithoutSpaceInput;

    @Field(() => ChatCreateOrConnectWithoutSpaceInput, {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutSpaceInput)
    connectOrCreate?: ChatCreateOrConnectWithoutSpaceInput;

    @Field(() => ChatUpsertWithoutSpaceInput, {nullable:true})
    @Type(() => ChatUpsertWithoutSpaceInput)
    upsert?: ChatUpsertWithoutSpaceInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: ChatWhereUniqueInput;

    @Field(() => ChatUpdateWithoutSpaceInput, {nullable:true})
    @Type(() => ChatUpdateWithoutSpaceInput)
    update?: ChatUpdateWithoutSpaceInput;
}
