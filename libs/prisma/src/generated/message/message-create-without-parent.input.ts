import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateNestedOneWithoutMessagesInput } from '../chat/chat-create-nested-one-without-messages.input';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { MessageCreateNestedManyWithoutParentInput } from './message-create-nested-many-without-parent.input';

@InputType()
export class MessageCreateWithoutParentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:true})
    contentType?: string;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => ChatCreateNestedOneWithoutMessagesInput, {nullable:false})
    chat!: ChatCreateNestedOneWithoutMessagesInput;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:true})
    sender?: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => MessageCreateNestedManyWithoutParentInput, {nullable:true})
    subMessages?: MessageCreateNestedManyWithoutParentInput;
}
