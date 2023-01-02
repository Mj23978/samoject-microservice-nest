import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceUpdateWithoutChatInput } from './space-update-without-chat.input';
import { Type } from 'class-transformer';
import { SpaceCreateWithoutChatInput } from './space-create-without-chat.input';

@InputType()
export class SpaceUpsertWithoutChatInput {

    @Field(() => SpaceUpdateWithoutChatInput, {nullable:false})
    @Type(() => SpaceUpdateWithoutChatInput)
    update!: SpaceUpdateWithoutChatInput;

    @Field(() => SpaceCreateWithoutChatInput, {nullable:false})
    @Type(() => SpaceCreateWithoutChatInput)
    create!: SpaceCreateWithoutChatInput;
}
