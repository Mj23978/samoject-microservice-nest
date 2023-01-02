import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceCreateWithoutChatInput } from './space-create-without-chat.input';
import { Type } from 'class-transformer';
import { SpaceCreateOrConnectWithoutChatInput } from './space-create-or-connect-without-chat.input';
import { SpaceUpsertWithoutChatInput } from './space-upsert-without-chat.input';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { SpaceUpdateWithoutChatInput } from './space-update-without-chat.input';

@InputType()
export class SpaceUncheckedUpdateOneWithoutChatNestedInput {

    @Field(() => SpaceCreateWithoutChatInput, {nullable:true})
    @Type(() => SpaceCreateWithoutChatInput)
    create?: SpaceCreateWithoutChatInput;

    @Field(() => SpaceCreateOrConnectWithoutChatInput, {nullable:true})
    @Type(() => SpaceCreateOrConnectWithoutChatInput)
    connectOrCreate?: SpaceCreateOrConnectWithoutChatInput;

    @Field(() => SpaceUpsertWithoutChatInput, {nullable:true})
    @Type(() => SpaceUpsertWithoutChatInput)
    upsert?: SpaceUpsertWithoutChatInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => SpaceWhereUniqueInput, {nullable:true})
    @Type(() => SpaceWhereUniqueInput)
    connect?: SpaceWhereUniqueInput;

    @Field(() => SpaceUpdateWithoutChatInput, {nullable:true})
    @Type(() => SpaceUpdateWithoutChatInput)
    update?: SpaceUpdateWithoutChatInput;
}
