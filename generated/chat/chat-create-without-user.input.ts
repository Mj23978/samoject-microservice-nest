import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateNestedManyWithoutChatInput } from '../message/message-create-nested-many-without-chat.input';
import { ProjectCreateNestedOneWithoutChatInput } from '../project/project-create-nested-one-without-chat.input';
import { SpaceCreateNestedOneWithoutChatInput } from '../space/space-create-nested-one-without-chat.input';
import { TaskCreateNestedOneWithoutChatInput } from '../task/task-create-nested-one-without-chat.input';

@InputType()
export class ChatCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MessageCreateNestedManyWithoutChatInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutChatInput;

    @Field(() => ProjectCreateNestedOneWithoutChatInput, {nullable:true})
    Project?: ProjectCreateNestedOneWithoutChatInput;

    @Field(() => SpaceCreateNestedOneWithoutChatInput, {nullable:true})
    Space?: SpaceCreateNestedOneWithoutChatInput;

    @Field(() => TaskCreateNestedOneWithoutChatInput, {nullable:true})
    Task?: TaskCreateNestedOneWithoutChatInput;
}
