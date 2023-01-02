import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ChatUpdateOneRequiredWithoutMessagesNestedInput } from '../chat/chat-update-one-required-without-messages-nested.input';
import { MessageUpdateOneWithoutSubMessagesNestedInput } from './message-update-one-without-sub-messages-nested.input';
import { UserUpdateOneWithoutCommentsNestedInput } from '../user/user-update-one-without-comments-nested.input';
import { MessageUpdateManyWithoutParentNestedInput } from './message-update-many-without-parent-nested.input';

@InputType()
export class MessageUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    contentType?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: StringFieldUpdateOperationsInput;

    @Field(() => ChatUpdateOneRequiredWithoutMessagesNestedInput, {nullable:true})
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput;

    @Field(() => MessageUpdateOneWithoutSubMessagesNestedInput, {nullable:true})
    parent?: MessageUpdateOneWithoutSubMessagesNestedInput;

    @Field(() => UserUpdateOneWithoutCommentsNestedInput, {nullable:true})
    sender?: UserUpdateOneWithoutCommentsNestedInput;

    @Field(() => MessageUpdateManyWithoutParentNestedInput, {nullable:true})
    subMessages?: MessageUpdateManyWithoutParentNestedInput;
}
