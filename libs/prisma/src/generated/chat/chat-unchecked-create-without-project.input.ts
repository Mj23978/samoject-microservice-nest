import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUncheckedCreateNestedManyWithoutChatInput } from '../message/message-unchecked-create-nested-many-without-chat.input';
import { SpaceUncheckedCreateNestedOneWithoutChatInput } from '../space/space-unchecked-create-nested-one-without-chat.input';
import { TaskUncheckedCreateNestedOneWithoutChatInput } from '../task/task-unchecked-create-nested-one-without-chat.input';
import { UserUncheckedCreateNestedOneWithoutChatInput } from '../user/user-unchecked-create-nested-one-without-chat.input';

@InputType()
export class ChatUncheckedCreateWithoutProjectInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MessageUncheckedCreateNestedManyWithoutChatInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput;

    @Field(() => SpaceUncheckedCreateNestedOneWithoutChatInput, {nullable:true})
    Space?: SpaceUncheckedCreateNestedOneWithoutChatInput;

    @Field(() => TaskUncheckedCreateNestedOneWithoutChatInput, {nullable:true})
    Task?: TaskUncheckedCreateNestedOneWithoutChatInput;

    @Field(() => UserUncheckedCreateNestedOneWithoutChatInput, {nullable:true})
    User?: UserUncheckedCreateNestedOneWithoutChatInput;
}
