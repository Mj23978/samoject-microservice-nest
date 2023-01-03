import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutChatInput } from './user-create-without-chat.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutChatInput } from './user-create-or-connect-without-chat.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedOneWithoutChatInput {

    @Field(() => UserCreateWithoutChatInput, {nullable:true})
    @Type(() => UserCreateWithoutChatInput)
    create?: UserCreateWithoutChatInput;

    @Field(() => UserCreateOrConnectWithoutChatInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutChatInput)
    connectOrCreate?: UserCreateOrConnectWithoutChatInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
