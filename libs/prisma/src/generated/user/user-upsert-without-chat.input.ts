import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutChatInput } from './user-update-without-chat.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutChatInput } from './user-create-without-chat.input';

@InputType()
export class UserUpsertWithoutChatInput {

    @Field(() => UserUpdateWithoutChatInput, {nullable:false})
    @Type(() => UserUpdateWithoutChatInput)
    update!: UserUpdateWithoutChatInput;

    @Field(() => UserCreateWithoutChatInput, {nullable:false})
    @Type(() => UserCreateWithoutChatInput)
    create!: UserCreateWithoutChatInput;
}
