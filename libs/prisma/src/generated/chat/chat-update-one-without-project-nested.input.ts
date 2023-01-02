import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutProjectInput } from './chat-create-without-project.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutProjectInput } from './chat-create-or-connect-without-project.input';
import { ChatUpsertWithoutProjectInput } from './chat-upsert-without-project.input';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { ChatUpdateWithoutProjectInput } from './chat-update-without-project.input';

@InputType()
export class ChatUpdateOneWithoutProjectNestedInput {

    @Field(() => ChatCreateWithoutProjectInput, {nullable:true})
    @Type(() => ChatCreateWithoutProjectInput)
    create?: ChatCreateWithoutProjectInput;

    @Field(() => ChatCreateOrConnectWithoutProjectInput, {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutProjectInput)
    connectOrCreate?: ChatCreateOrConnectWithoutProjectInput;

    @Field(() => ChatUpsertWithoutProjectInput, {nullable:true})
    @Type(() => ChatUpsertWithoutProjectInput)
    upsert?: ChatUpsertWithoutProjectInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: ChatWhereUniqueInput;

    @Field(() => ChatUpdateWithoutProjectInput, {nullable:true})
    @Type(() => ChatUpdateWithoutProjectInput)
    update?: ChatUpdateWithoutProjectInput;
}
