import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatUpdateWithoutProjectInput } from './chat-update-without-project.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutProjectInput } from './chat-create-without-project.input';

@InputType()
export class ChatUpsertWithoutProjectInput {

    @Field(() => ChatUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ChatUpdateWithoutProjectInput)
    update!: ChatUpdateWithoutProjectInput;

    @Field(() => ChatCreateWithoutProjectInput, {nullable:false})
    @Type(() => ChatCreateWithoutProjectInput)
    create!: ChatCreateWithoutProjectInput;
}
