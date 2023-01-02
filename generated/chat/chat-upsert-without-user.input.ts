import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatUpdateWithoutUserInput } from './chat-update-without-user.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutUserInput } from './chat-create-without-user.input';

@InputType()
export class ChatUpsertWithoutUserInput {

    @Field(() => ChatUpdateWithoutUserInput, {nullable:false})
    @Type(() => ChatUpdateWithoutUserInput)
    update!: ChatUpdateWithoutUserInput;

    @Field(() => ChatCreateWithoutUserInput, {nullable:false})
    @Type(() => ChatCreateWithoutUserInput)
    create!: ChatCreateWithoutUserInput;
}
