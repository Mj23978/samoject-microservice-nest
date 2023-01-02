import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MessageUpdateManyWithoutChatNestedInput } from '../message/message-update-many-without-chat-nested.input';
import { ProjectUpdateOneWithoutChatNestedInput } from '../project/project-update-one-without-chat-nested.input';
import { SpaceUpdateOneWithoutChatNestedInput } from '../space/space-update-one-without-chat-nested.input';
import { TaskUpdateOneWithoutChatNestedInput } from '../task/task-update-one-without-chat-nested.input';

@InputType()
export class ChatUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MessageUpdateManyWithoutChatNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutChatNestedInput;

    @Field(() => ProjectUpdateOneWithoutChatNestedInput, {nullable:true})
    Project?: ProjectUpdateOneWithoutChatNestedInput;

    @Field(() => SpaceUpdateOneWithoutChatNestedInput, {nullable:true})
    Space?: SpaceUpdateOneWithoutChatNestedInput;

    @Field(() => TaskUpdateOneWithoutChatNestedInput, {nullable:true})
    Task?: TaskUpdateOneWithoutChatNestedInput;
}
