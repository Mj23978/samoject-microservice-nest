import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutTaskInput } from './chat-create-without-task.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutTaskInput } from './chat-create-or-connect-without-task.input';
import { ChatUpsertWithoutTaskInput } from './chat-upsert-without-task.input';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { ChatUpdateWithoutTaskInput } from './chat-update-without-task.input';

@InputType()
export class ChatUpdateOneWithoutTaskNestedInput {

    @Field(() => ChatCreateWithoutTaskInput, {nullable:true})
    @Type(() => ChatCreateWithoutTaskInput)
    create?: ChatCreateWithoutTaskInput;

    @Field(() => ChatCreateOrConnectWithoutTaskInput, {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutTaskInput)
    connectOrCreate?: ChatCreateOrConnectWithoutTaskInput;

    @Field(() => ChatUpsertWithoutTaskInput, {nullable:true})
    @Type(() => ChatUpsertWithoutTaskInput)
    upsert?: ChatUpsertWithoutTaskInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: ChatWhereUniqueInput;

    @Field(() => ChatUpdateWithoutTaskInput, {nullable:true})
    @Type(() => ChatUpdateWithoutTaskInput)
    update?: ChatUpdateWithoutTaskInput;
}
