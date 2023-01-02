import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatUpdateWithoutSpaceInput } from './chat-update-without-space.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutSpaceInput } from './chat-create-without-space.input';

@InputType()
export class ChatUpsertWithoutSpaceInput {

    @Field(() => ChatUpdateWithoutSpaceInput, {nullable:false})
    @Type(() => ChatUpdateWithoutSpaceInput)
    update!: ChatUpdateWithoutSpaceInput;

    @Field(() => ChatCreateWithoutSpaceInput, {nullable:false})
    @Type(() => ChatCreateWithoutSpaceInput)
    create!: ChatCreateWithoutSpaceInput;
}
