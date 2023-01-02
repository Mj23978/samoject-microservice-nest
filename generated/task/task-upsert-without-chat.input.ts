import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUpdateWithoutChatInput } from './task-update-without-chat.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutChatInput } from './task-create-without-chat.input';

@InputType()
export class TaskUpsertWithoutChatInput {

    @Field(() => TaskUpdateWithoutChatInput, {nullable:false})
    @Type(() => TaskUpdateWithoutChatInput)
    update!: TaskUpdateWithoutChatInput;

    @Field(() => TaskCreateWithoutChatInput, {nullable:false})
    @Type(() => TaskCreateWithoutChatInput)
    create!: TaskCreateWithoutChatInput;
}
