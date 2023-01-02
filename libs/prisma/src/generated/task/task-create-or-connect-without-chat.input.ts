import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutChatInput } from './task-create-without-chat.input';

@InputType()
export class TaskCreateOrConnectWithoutChatInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutChatInput, {nullable:false})
    @Type(() => TaskCreateWithoutChatInput)
    create!: TaskCreateWithoutChatInput;
}
