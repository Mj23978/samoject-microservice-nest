import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceCreateWithoutChatInput } from './space-create-without-chat.input';
import { Type } from 'class-transformer';
import { SpaceCreateOrConnectWithoutChatInput } from './space-create-or-connect-without-chat.input';
import { SpaceWhereUniqueInput } from './space-where-unique.input';

@InputType()
export class SpaceUncheckedCreateNestedOneWithoutChatInput {

    @Field(() => SpaceCreateWithoutChatInput, {nullable:true})
    @Type(() => SpaceCreateWithoutChatInput)
    create?: SpaceCreateWithoutChatInput;

    @Field(() => SpaceCreateOrConnectWithoutChatInput, {nullable:true})
    @Type(() => SpaceCreateOrConnectWithoutChatInput)
    connectOrCreate?: SpaceCreateOrConnectWithoutChatInput;

    @Field(() => SpaceWhereUniqueInput, {nullable:true})
    @Type(() => SpaceWhereUniqueInput)
    connect?: SpaceWhereUniqueInput;
}
