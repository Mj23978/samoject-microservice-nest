import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutUserInput } from './chat-create-without-user.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutUserInput } from './chat-create-or-connect-without-user.input';
import { ChatUpsertWithoutUserInput } from './chat-upsert-without-user.input';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { ChatUpdateWithoutUserInput } from './chat-update-without-user.input';

@InputType()
export class ChatUpdateOneWithoutUserNestedInput {

    @Field(() => ChatCreateWithoutUserInput, {nullable:true})
    @Type(() => ChatCreateWithoutUserInput)
    create?: ChatCreateWithoutUserInput;

    @Field(() => ChatCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutUserInput)
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput;

    @Field(() => ChatUpsertWithoutUserInput, {nullable:true})
    @Type(() => ChatUpsertWithoutUserInput)
    upsert?: ChatUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: ChatWhereUniqueInput;

    @Field(() => ChatUpdateWithoutUserInput, {nullable:true})
    @Type(() => ChatUpdateWithoutUserInput)
    update?: ChatUpdateWithoutUserInput;
}
