import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUncheckedCreateNestedManyWithoutChatInput } from '../message/message-unchecked-create-nested-many-without-chat.input';
import { ProjectUncheckedCreateNestedOneWithoutChatInput } from '../project/project-unchecked-create-nested-one-without-chat.input';
import { SpaceUncheckedCreateNestedOneWithoutChatInput } from '../space/space-unchecked-create-nested-one-without-chat.input';
import { TaskUncheckedCreateNestedOneWithoutChatInput } from '../task/task-unchecked-create-nested-one-without-chat.input';

@InputType()
export class ChatUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MessageUncheckedCreateNestedManyWithoutChatInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput;

    @Field(() => ProjectUncheckedCreateNestedOneWithoutChatInput, {nullable:true})
    Project?: ProjectUncheckedCreateNestedOneWithoutChatInput;

    @Field(() => SpaceUncheckedCreateNestedOneWithoutChatInput, {nullable:true})
    Space?: SpaceUncheckedCreateNestedOneWithoutChatInput;

    @Field(() => TaskUncheckedCreateNestedOneWithoutChatInput, {nullable:true})
    Task?: TaskUncheckedCreateNestedOneWithoutChatInput;
}
