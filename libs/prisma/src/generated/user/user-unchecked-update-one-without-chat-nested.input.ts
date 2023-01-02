import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutChatInput } from './user-create-without-chat.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutChatInput } from './user-create-or-connect-without-chat.input';
import { UserUpsertWithoutChatInput } from './user-upsert-without-chat.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutChatInput } from './user-update-without-chat.input';

@InputType()
export class UserUncheckedUpdateOneWithoutChatNestedInput {

    @Field(() => UserCreateWithoutChatInput, {nullable:true})
    @Type(() => UserCreateWithoutChatInput)
    create?: UserCreateWithoutChatInput;

    @Field(() => UserCreateOrConnectWithoutChatInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutChatInput)
    connectOrCreate?: UserCreateOrConnectWithoutChatInput;

    @Field(() => UserUpsertWithoutChatInput, {nullable:true})
    @Type(() => UserUpsertWithoutChatInput)
    upsert?: UserUpsertWithoutChatInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutChatInput, {nullable:true})
    @Type(() => UserUpdateWithoutChatInput)
    update?: UserUpdateWithoutChatInput;
}
