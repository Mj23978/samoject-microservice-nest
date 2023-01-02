import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutChatInput } from './task-create-without-chat.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutChatInput } from './task-create-or-connect-without-chat.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedOneWithoutChatInput {

    @Field(() => TaskCreateWithoutChatInput, {nullable:true})
    @Type(() => TaskCreateWithoutChatInput)
    create?: TaskCreateWithoutChatInput;

    @Field(() => TaskCreateOrConnectWithoutChatInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutChatInput)
    connectOrCreate?: TaskCreateOrConnectWithoutChatInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;
}
