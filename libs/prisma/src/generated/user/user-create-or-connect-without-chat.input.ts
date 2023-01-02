import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutChatInput } from './user-create-without-chat.input';

@InputType()
export class UserCreateOrConnectWithoutChatInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutChatInput, {nullable:false})
    @Type(() => UserCreateWithoutChatInput)
    create!: UserCreateWithoutChatInput;
}
