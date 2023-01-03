import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MessageUncheckedUpdateManyWithoutChatNestedInput } from '../message/message-unchecked-update-many-without-chat-nested.input';
import { ProjectUncheckedUpdateOneWithoutChatNestedInput } from '../project/project-unchecked-update-one-without-chat-nested.input';
import { SpaceUncheckedUpdateOneWithoutChatNestedInput } from '../space/space-unchecked-update-one-without-chat-nested.input';
import { TaskUncheckedUpdateOneWithoutChatNestedInput } from '../task/task-unchecked-update-one-without-chat-nested.input';

@InputType()
export class ChatUncheckedUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MessageUncheckedUpdateManyWithoutChatNestedInput, {nullable:true})
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput;

    @Field(() => ProjectUncheckedUpdateOneWithoutChatNestedInput, {nullable:true})
    Project?: ProjectUncheckedUpdateOneWithoutChatNestedInput;

    @Field(() => SpaceUncheckedUpdateOneWithoutChatNestedInput, {nullable:true})
    Space?: SpaceUncheckedUpdateOneWithoutChatNestedInput;

    @Field(() => TaskUncheckedUpdateOneWithoutChatNestedInput, {nullable:true})
    Task?: TaskUncheckedUpdateOneWithoutChatNestedInput;
}
