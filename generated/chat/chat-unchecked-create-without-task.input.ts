import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUncheckedCreateNestedManyWithoutChatInput } from '../message/message-unchecked-create-nested-many-without-chat.input';
import { ProjectUncheckedCreateNestedOneWithoutChatInput } from '../project/project-unchecked-create-nested-one-without-chat.input';
import { SpaceUncheckedCreateNestedOneWithoutChatInput } from '../space/space-unchecked-create-nested-one-without-chat.input';
import { UserUncheckedCreateNestedOneWithoutChatInput } from '../user/user-unchecked-create-nested-one-without-chat.input';

@InputType()
export class ChatUncheckedCreateWithoutTaskInput {

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

    @Field(() => UserUncheckedCreateNestedOneWithoutChatInput, {nullable:true})
    User?: UserUncheckedCreateNestedOneWithoutChatInput;
}
