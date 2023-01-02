import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutChatInput } from './task-create-without-chat.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutChatInput } from './task-create-or-connect-without-chat.input';
import { TaskUpsertWithoutChatInput } from './task-upsert-without-chat.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutChatInput } from './task-update-without-chat.input';

@InputType()
export class TaskUncheckedUpdateOneWithoutChatNestedInput {

    @Field(() => TaskCreateWithoutChatInput, {nullable:true})
    @Type(() => TaskCreateWithoutChatInput)
    create?: TaskCreateWithoutChatInput;

    @Field(() => TaskCreateOrConnectWithoutChatInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutChatInput)
    connectOrCreate?: TaskCreateOrConnectWithoutChatInput;

    @Field(() => TaskUpsertWithoutChatInput, {nullable:true})
    @Type(() => TaskUpsertWithoutChatInput)
    upsert?: TaskUpsertWithoutChatInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutChatInput, {nullable:true})
    @Type(() => TaskUpdateWithoutChatInput)
    update?: TaskUpdateWithoutChatInput;
}
